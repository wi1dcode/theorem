const Pro = require("../models/proModel")
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require("uuid")
const mailService = require("../services/mailService")
const axios = require("axios")
const questions = require("../services/pro-questions.json")
const authService = require("../services/authService")
const logService = require("../services/logService")

const createProAccount = async (
  profile,
  password,
  documents,
  additionalInfo
) => {
  const hashedPassword = await bcrypt.hash(password, 12)
  const activationLink = uuidv4()

  const proUser = new Pro({
    profile,
    password: hashedPassword,
    documents,
    additionalInfo,
    activationLink,
    roles: ["PRO"],
    isActivated: false,
  })

  console.log(proUser)

  await proUser.save()

  await mailService.sendActivationMail(
    profile.email,
    `${process.env.CLIENT_URL}/activate/${activationLink}`,
    profile.firstname
  )

  return proUser
}

const getResponses = async (req, res) => {
  try {
    const { formId, responseId, password } = req.body
    const token = process.env.TYPEFORM_TOKEN
    const clientIp =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress

    const typeformResponse = await axios.get(
      `https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )

    const answers = typeformResponse.data.items[0]?.answers

    let profile = {}
    let documents = []
    let additionalInfo = []

    answers.forEach((answer) => {
      const { field, type, choice, choices, file_url } = answer
      const answerValue =
        type === "choice"
          ? choice.label
          : choices
          ? choices.labels.join(", ")
          : answer[type]
      const key = Object.keys(questions.keys).find(
        (k) => questions.keys[k] === field.ref
      )

      if (key) {
        profile[key] = answerValue
      } else if (type === "file_upload") {
        documents.push({
          name: choice ? choice.label : "Document",
          path: file_url,
        })
      } else {
        const questionTitle =
          questions.questions.find((q) => q.id === field.id)?.title ||
          "Unknown question"
        if (!Object.values(questions.keys).includes(field.ref)) {
          additionalInfo.push({ question: questionTitle, answer: answerValue })
        }
      }
    })

    questions.questions.forEach((q) => {
      if (!additionalInfo.some((info) => info.question === q.title)) {
        const answer = answers.find((a) => a.field.id === q.id)
        if (answer) {
          const value =
            answer.type === "choice"
              ? answer.choice.label
              : answer.choices
              ? answer.choices.labels.join(", ")
              : answer[answer.type]
          additionalInfo.push({ question: q.title, answer: value })
        }
      }
    })

    let user = await Pro.findOne({ "profile.email": profile.email })
    if (!user) {
      user = await createProAccount(
        profile,
        password,
        documents,
        additionalInfo
      )
    }

    console.log(user)

    logService.logEvent(
      "PRO_registration",
      `Nouvel utilisateur PRO enregistré: ${profile.email} - ${profile.job}`,
      "SYSTEM",
      clientIp,
      req.headers["user-agent"]
    )

    res.json({ message: "Pro account created successfully", user })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Error processing: " + error.message })
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

    const user = await Pro.findById(userData.id).select(
      "-password -activationLink -activationLimit -username"
    )

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (e) {
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = { getResponses, getMe }
