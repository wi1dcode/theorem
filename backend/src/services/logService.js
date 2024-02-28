const Log = require("../models/logModel")

const statusTranslations = {
  PENDING: "en attente de vérification",
  ANALYSE: "en étude",
  REFUSED: "refusé",
  APPROVED: "approuvé",
  PROGRESS: "en cours",
  PAYMENT: "En attente de paiement",
  FINISH: "terminé",
}

const customizeLogMessage = (message) => {
  if (message.includes("isActivated: true")) {
    return message.replace("isActivated: true", "confirmation d'email")
  }
  if (message.includes("isActivated: false")) {
    return message.replace("isActivated: false", "email non confirmé")
  }

  Object.entries(statusTranslations).forEach(([key, value]) => {
    message = message.replace(new RegExp(key, "g"), value)
  })

  return message
}

const logEvent = async (eventType, description, author, ip, browser) => {
  const logEntry = new Log({ eventType, description, author, ip, browser })
  await logEntry.save()
}

module.exports = { logEvent, customizeLogMessage }
