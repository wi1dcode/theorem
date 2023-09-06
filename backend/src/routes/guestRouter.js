const Router = require("express")
const router = new Router()
const Entrepreneur = require("../models/entrepreneurModel")
const { check } = require("express-validator")

const proController = require("../controllers/proController")

router.post(
  "/pro/entrepreneur",
  [
    check("email", "Cette email n'existe pas!")
      .isEmail()
      .notEmpty()
      .withMessage("L'e-mail ne peut pas être vide!")
      .custom(async (value) => {
        const entrepreneur = await Entrepreneur.findOne({ email: value })
        if (entrepreneur) {
          throw new Error("Cette email deja exist!")
        }
      }),
    check(
      "password",
      "La longueur du mot de passe doit être comprise entre 5 et 16 caractères."
    )
      .isLength({
        min: 5,
        max: 16,
      })
      .notEmpty()
      .withMessage("indiquez votre mot de passe"),
    check("civil", "civil ne peut pas être vide").notEmpty(),
    check("name", "nom ne peut pas être vide").notEmpty(),
    check("company", "nom de entreprise ne peut pas être vide").notEmpty(),
    check("city", "ville ne peut pas être vide").notEmpty(),
    check("capital", "capital ne peut pas être vide").notEmpty(),
    check(
      "lastYearTurnover",
      "chiffre d'affaires ne peut pas être vide"
    ).notEmpty(),
    check(
      "actualTurnover",
      "chiffre d'affaires ne peut pas être vide"
    ).notEmpty(),
    check("staff", "staff ne peut pas être vide").notEmpty().isNumeric(),
    check("manager", "nom de gérant ne peut pas être vide").notEmpty(),
    check("channels", "canaux ne peut pas être vide").notEmpty(),
    check("clients", "clients ne peut pas être vide").notEmpty(),
    check("job", "métiers ne peut pas être vide").notEmpty(),
    check("mobility", "mobilité ne peut pas être vide").notEmpty(),
    check("tel", "numero de telephone ne peut pas être vide")
      .notEmpty()
      .isNumeric(),
    check(
      "about",
      "indiquez comment avez-vous entendu parler de nous"
    ).notEmpty(),
  ],
  proController.createEntrepreneur
)

router.post(
  "/pro/architecte",
  [
    check("email", "Cette email n'existe pas!")
      .isEmail()
      .notEmpty()
      .withMessage("L'e-mail ne peut pas être vide!")
      .custom(async (value) => {
        const entrepreneur = await Entrepreneur.findOne({ email: value })
        if (entrepreneur) {
          throw new Error("Cette email deja exist!")
        }
      }),
    check(
      "password",
      "La longueur du mot de passe doit être comprise entre 5 et 16 caractères."
    )
      .isLength({
        min: 5,
        max: 16,
      })
      .notEmpty()
      .withMessage("indiquez votre mot de passe"),
    check("civil", "civil ne peut pas être vide").notEmpty(),
    check("name", "nom ne peut pas être vide").notEmpty(),
    check("status", "ce champ ne peut pas être vide").notEmpty(),
    check("city", "ville ne peut pas être vide").notEmpty(),
    check("type", "type ne peut pas être vide").notEmpty(),
    check("prestations", "prestations ne peut pas être vide").notEmpty(),
    check("diplome", "diplome ne peut pas être vide").notEmpty(),
    check("company", "entreprise ne peut pas être vide").notEmpty(),
    check("manager", "nom de gérant ne peut pas être vide").notEmpty(),
    check("channels", "canaux ne peut pas être vide").notEmpty(),
    check("clients", "clients ne peut pas être vide").notEmpty(),
    check("job", "métiers ne peut pas être vide").notEmpty(),
    check("mobility", "mobilité ne peut pas être vide").notEmpty(),
    check("tel", "numero de telephone ne peut pas être vide")
      .notEmpty()
      .isNumeric(),
    check(
      "about",
      "indiquez comment avez-vous entendu parler de nous"
    ).notEmpty(),
  ],
  proController.createArchitecte
)

module.exports = router
