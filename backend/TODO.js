// CREATE HOOK FOR TYPEFORM , ADD NODEMAILER
// RENAME CLIENTS MODEL TO FORMS MODEL
// AUTO-CREATE USER WHEN FORM SUMBITTED
// RELATION WITH FORM AND USER (EMAIL OR UID)

app.post("/webhook", async (req, res) => {
  try {
    const formData = req.body // DETAILS FROM TYPEFORM

    // CREATE CLIENT (RESPONSES)
    const clientData = {
      renovation: formData.event.form_response.fields.find(
        (field) => field.ref === "renovation"
      ).label,
      search: formData.event.form_response.fields.find(
        (field) => field.ref === "search"
      ).label,
      email: formData.event.form_response.fields.find(
        (field) => field.ref === "email"
      ).text,
      // ANOTHER DATA
    }

    const client = new Client(clientData)

    // SAVE CLIENT RESPONSES
    await client.save()

    // CREATE USER WITH RANDOM PASSWORD

    const randomPassword = Math.random().toString(36).slice(-8)
    const userData = {
      name: formData.event.form_response.fields.find(
        (field) => field.ref === "name"
      ).text,
      email: formData.event.form_response.fields.find(
        (field) => field.ref === "email"
      ).text,
      password: randomPassword,
      // ANOTHER DATA
    }

    const user = new User(userData)
    await user.save()

    // REALATION BETWEEN CLIENT AND USER USING SAME EMAIL
    user.clients.push(client)
    await user.save()

    res.status(200).json({ message: "DATA SAVED" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// CLIENT MODEL FOR RELATION // EDIT MODELS

const Client = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  forms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Client", // RELATION WITH CLIENT MODEL
    },
  ],
})

// OR

app.post("/webhook", async (req, res) => {
  try {
    const formData = req.body

    const clientData = {
      renovation: formData.event.form_response.fields.find(
        (field) => field.ref === "renovation"
      ).label,
      search: formData.event.form_response.fields.find(
        (field) => field.ref === "search"
      ).label,
      email: formData.event.form_response.fields.find(
        (field) => field.ref === "email"
      ).text,
    }

    let user = await User.findOne({ email: clientData.email })
    if (!user) {
      const randomPassword = Math.random().toString(36).slice(-8)
      const userData = {
        name: formData.event.form_response.fields.find(
          (field) => field.ref === "name"
        ).text,
        email: clientData.email,
        password: randomPassword,
      }
      user = new User(userData)
      await user.save()
    }

    const client = new Client({
      user: user._id,
      renovation: clientData.renovation,
      search: clientData.search,
    })

    await client.save()

    user.clients.push(client._id)
    await user.save()

    res.status(200).json({ message: "SAVED" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
