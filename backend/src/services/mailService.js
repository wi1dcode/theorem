const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

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
    });

    this.mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Theorem",
        link: process.env.CLIENT_URL,
      },
    });
  }

  generateEmailTemplate(type, link, name = "", code = "") {
    let email;
    switch (type) {
      case "activation":
        email = {
          body: {
            greeting: `Bonjour ${name}`,
            signature: false,
            intro:
              "Bienvenue parmi nous ! Votre compte a été créé avec succès.",
            action: {
              instructions:
                "Pour l’activer, il vous suffit de cliquer sur le lien ci-dessous : ",
              button: {
                color: "#22BC66",
                text: "Activer mon compte",
                link: link,
              },
            },
            outro: "Cordialement, votre équipe Theorem",
          },
        };
        break;
      case "passwordResetCode":
        email = {
          body: {
            greeting: `Bonjour`,
            signature: false,
            intro: `Vous avez oublié votre mot de passe ? Pas de panique, ça arrive. Entrez ce code pour changer votre mot de passe: <strong>${code}</strong>`,
            outro:
              "Ce code est valide pour 10 minutes.Si vous n'avez pas fait cette demande, ignorez ce message. À bientôt, votre équipe Theorem.",
          },
        };
        break;
    }
    return this.mailGenerator.generate(email);
  }

  generateProjectStatusUpdateEmail(name, status, link, comment = "") {
    let emailBody;

    const normalizedStatus = status.toLowerCase();

    switch (normalizedStatus) {
      case "approuvé":
        emailBody = {
          body: {
            greeting: `Bonjour ${name}`,
            signature: false,
            intro: `Bonne nouvelle ! L'aventure avec Theorem commence dès maintenant. Votre chef de projet vous contactera très bientôt pour organiser une visite et démarrer les travaux.`,
            action: {
              instructions:
                "Vous pouvez consulter les détails de votre projet en vous connectant à votre espace client :",
              button: {
                color: "#22BC66",
                text: "Voir mon projet",
                link: link,
              },
            },
            signature: "Cordialement, votre équipe Theorem",
            outro:
              "Si vous avez des questions, n'hésitez pas à nous contacter.",
          },
        };
        break;

      case "refusé":
        emailBody = {
          body: {
            greeting: `Bonjour ${name}`,
            signature: false,
            intro: `Merci d'avoir pensé à Theorem pour la réalisation de votre projet ! Nous avons pris le temps d'examiner les détails de votre projet, mais nous ne sommes malheureusement pas en mesure d'intervenir sur ce chantier.`,
            outro:
              "Nous restons à votre disposition pour toute autre information. Cordialement, Votre équipe Theorem.",
          },
        };
        break;

      default:
        emailBody = {
          body: {
            greeting: `Bonjour ${name}`,
            signature: false,
            intro: `Le statut de votre projet a été changé à "${status}".`,
            action: {
              instructions:
                "Vous pouvez consulter les détails de votre projet en vous connectant à votre espace client :",
              button: {
                color: "#22BC66",
                text: "Voir mon projet",
                link: link,
              },
            },
            signature: "Cordialement, votre équipe Theorem",
            outro:
              "Si vous avez des questions, n'hésitez pas à nous contacter.",
          },
        };
        break;
    }

    if (comment) {
      emailBody.body.intro += `
        <br><br>
        <div style="border-left: 4px solid #C8B790; background-color: #f2f3f5; padding: 10px; margin-top: 10px; border-radius: 5px;">
          <span style="color: #C8B790; font-weight: bold;">Commentaire:</span>
          <p style="color: #555;">${comment}</p>
        </div>
      `;
    }

    return this.mailGenerator.generate(emailBody);
  }

  async sendActivationMail(to, name, link) {
    const emailBody = this.generateEmailTemplate("activation", name, link);
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "👋 Bienvenue sur Theorem. Votre compte a bien été créé.",
      html: emailBody,
    });
  }

  async sendPasswordResetCode(to, code) {
    const emailBody = this.generateEmailTemplate(
      "passwordResetCode",
      "",
      "",
      code
    );
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "🔄 Réinitialisation du mot de passe",
      html: emailBody,
    });
  }

  async sendProjectStatusUpdateMail(to, name, status, link, comment = "") {
    const subject =
      status === "approuvé"
        ? "🎉 Votre projet est validé ! – On démarre bientôt !"
        : status === "refusé"
        ? "Retour sur votre demande de projet."
        : status === "en attente"
        ? "⏳ Votre projet est en attente"
        : `Mise à jour du statut de votre projet - ${status}`;

    const emailBody = this.generateProjectStatusUpdateEmail(
      name,
      status,
      link,
      comment
    );
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: emailBody,
    });
  }
}

module.exports = new MailService();
