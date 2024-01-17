const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const uuid = require("uuid")
const axios = require("axios")
const Form = require("../models/formModel")
const mailService = require("../services/mailService")
const { validationResult } = require("express-validator")
const authService = require("../services/authService")
const logService = require("../services/logService")

const createAccount = async (email, password, name, city, tel) => {
  try {
    const hashPassword = bcrypt.hashSync(password, 7)
    const activationLink = uuid.v4()

    const user = new User({
      email: email,
      password: hashPassword,
      roles: ["USER"],
      name: name,
      city: city,
      tel: tel,
      activationLink: activationLink,
    })

    await user.save()
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/account/activate/${activationLink}`,
      name
    )

    return user
  } catch (error) {
    throw new Error("Error creating user: " + error)
  }
}

const getData = async (req, res) => {
  try {
    const { formId, responseId, password, city } = req.body
    console.log(`req.body ${formId} + ${responseId} + ${password} + ${city} `)
    const token = process.env.TYPEFORM_TOKEN

    const typeformResponse = await axios.get(
      `https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    const responseData = typeformResponse?.data
    console.log(responseData)
    const answers = responseData.items[0]?.answers
    console.log(answers)

    const answersData = {}
    const addressFieldsToExclude = [
      "61470d8a-35e0-43ac-a276-ff3a3d564a8b",
      "1c5b8c97-e6b7-4704-8e63-caaf3d39ef1a",
      "5e43751b-f922-4ccb-98e9-24e2bfe7d39e",
      "d8ab1844-639a-4a73-9259-744281d90718",
      "baef9835-bb72-4461-aee5-0b2d43c3ad62",
      "47993c0f-b4a4-4a23-b81f-9a1d0b7bbea5",
    ]

    const addressFields = []

    answers.forEach((answer) => {
      const { field, type, [type]: value, choice } = answer
      const ref = field ? field.ref : "Unknown"

      if (addressFieldsToExclude.includes(ref)) {
        if (!answersData.address) {
          answersData.address = value || choice?.label || answer[type]
        } else {
          answersData.address += `, ${value || choice?.label || answer[type]}`
        }
      } else {
        addressFields.push(ref)

        if (type === "choice") {
          answersData[ref] = choice.label
        } else if (type === "boolean") {
          answersData[ref] = value ? true : false
        } else if (type === "number") {
          answersData[ref] = value.toString()
        } else if (
          type === "text" ||
          type === "email" ||
          type === "phone_number"
        ) {
          answersData[ref] = answer[type]
        } else if (type === "date") {
          answersData[ref] = new Date(value).toISOString()
        } else {
          // handle other types as needed
          answersData[ref] = "Unhandled type"
        }
      }
    })

    let user = await User.findOne({ email: answersData.email })
    if (!user) {
      user = await createAccount(
        answersData.email,
        password,
        answersData.name,
        city,
        answersData.tel
      )
    }

    const client = new Form({
      author: answersData.email,
      renovation: answersData.renovation,
      search: answersData.search,
      sizes: answersData.sizes,
      type: answersData.type,
      havePhoto: answersData.havePhoto,
      help: answersData.help,
      surface: answersData.surface,
      products: answersData.products,
      budget: answersData.budget,
      documents: answersData.documents,
      photos: answersData.photos,
      residence: answersData.residence,
      when: answersData.when,
      about: answersData.about,
      name: answersData.name,
      email: answersData.email,
      tel: answersData.tel,
      adresse: answersData.address,
      password: password,
      status: "PENDING",
    })

    console.log("client" + client)

    await client.save()
    user.forms.push(client._id)
    await user.save()

    res.json({ message: "request created successfully" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Error processing: " + error.message })
  }
}

const createRequest = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Create request error", errors })
    }
    const {
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information,
      documents,
      adresse,
      residence,
      when,
      about,
      email,
      tel,
      name,
      city,
      password,
    } = req.body

    const client = new Form({
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information, // ?
      documents,
      adresse,
      residence,
      when,
      about,
      email,
      tel,
      password,
      status: "PENDING",
    })

    const user = await createAccount(email, password, name, city, tel)

    client.author = user.email

    await user.save()
    await client.save()
    await logService.logEvent(
      "user_registration",
      `Nouvel utilisateur enregistré: ${email} avec le projet ${renovation}`,
      "SYSTEM",
      req.ip,
      req.headers["user-agent"]
    )

    res.json({ message: "request created successfully" })
  } catch (error) {
    res.status(400).json({
      message: "Error creating request and user" + error,
    })
  }
}

const getMe = async (req, res) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(403).json({ message: "Token is missing" })
    }

    const userData = authService.validateAccessToken(token.split("Bearer ")[1])

    if (!userData) {
      return res.status(403).json({ message: "Token invalid" })
    }

    const user = await User.findById(userData.id)
      .select("-password -isActivated -activationLink -username")
      .populate("forms")

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (e) {
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = { createRequest, getData, getMe }
