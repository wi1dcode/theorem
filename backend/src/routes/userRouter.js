const Router = require("express")
const router = new Router()
const { check } = require("express-validator")

const authController = require("../controllers/authController")

// router.get("/refresh", authController.refresh)
// router.post("/logout", authController.logout)
router.get("/session", authController.validateToken)
router.get("/activate/:link", authController.activate)
router.post("/login", authController.login)

router.post(
  "/create",
  [
    check("email", "Cette email n'existe pas!").isEmail(),
    check("email", "L'e-mail ne peut pas être vide!").notEmpty(),
    check(
      "password",
      "La longueur du mot de passe doit être comprise entre 5 et 16 caractères."
    ).isLength({
      min: 5,
      max: 16,
    }),
  ],
  authController.register
)

module.exports = router
