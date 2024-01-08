const nodemailer = require("nodemailer")
const Mailgen = require("mailgen")

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    this.mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Theorem Services",
        link: process.env.API_URL,
      },
    })
  }

  generateEmailTemplate(type, link, name = "") {
    let email
    switch (type) {
      case "activation":
        email = {
          body: {
            greeting: `Bonjour ${name}`,
            signature: false,
            intro:
              "Nous vous confirmons la création de votre compte sur notre service. Veuillez activer votre compte.",
            action: {
              instructions:
                "Pour activer votre compte, veuillez cliquer sur le lien ci-dessous :",
              button: {
                color: "#22BC66",
                text: "Activer mon compte",
                link: link,
              },
            },
            outro:
              "Si vous avez des questions, n'hésitez pas à nous contacter.",
          },
        }
        break
      case "passwordReset":
        email = {
          body: {
            greeting: `Bonjour`,
            signature: false,
            intro:
              "Vous avez demandé la réinitialisation de votre mot de passe.",
            action: {
              instructions:
                "Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien ci-dessous :",
              button: {
                color: "#DC4D2F",
                text: "Réinitialiser le mot de passe",
                link: link,
              },
            },
            outro:
              "Si vous n'avez pas demandé la réinitialisation de votre mot de passe, veuillez ignorer cet email.",
          },
        }
        break
    }
    return this.mailGenerator.generate(email)
  }

  async sendActivationMail(to, name, link) {
    const emailBody = this.generateEmailTemplate("activation", name, link)
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Activation de compte sur " + process.env.API_URL,
      html: emailBody,
    })
  }

  async sendPasswordResetMail(to, link) {
    const emailBody = this.generateEmailTemplate("passwordReset", link)
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject:
        "Réinitialisation de votre mot de passe sur " + process.env.API_URL,
      html: emailBody,
    })
  }
}

module.exports = new MailService()
