const Router = require("express")
const router = new Router()
const { check } = require("express-validator")
const upload = require("../services/documentUpload")

const authController = require("../controllers/authController")
const clientController = require("../controllers/clientController")
const authMiddleware = require("../middlewares/authMiddleware")
const { uploadImages } = require("../services/imageUpload")

// router.get("/refresh", authController.refresh)
// router.post("/logout", authController.logout)

router.get("/session", authController.validateToken)
router.post(
  "/change-password",
  [
    check("newPassword", "Le mot de passe ne peut pas être vide !").notEmpty(),
    check(
      "newPassword",
      "Le mot de passe doit comporter entre 5 et 16 caractères."
    ).isLength({
      min: 5,
      max: 16,
    }),
  ],
  authMiddleware(),
  clientController.changePassword
)
router.get("/userinfo", authMiddleware(), clientController.getMe)
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

router.post(
  "/upload/document/:formId",
  authMiddleware(),
  upload.single("document"),
  clientController.uploadDocument
)

router.post(
  "/upload/image/:formId",
  authMiddleware(),
  uploadImages.array("images", 10),
  clientController.uploadImages
)

router.get(
  "/download/document/:formId/:documentName",
  authMiddleware(),
  clientController.downloadDocument
)

module.exports = router
