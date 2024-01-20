const Router = require("express")
const router = new Router()
const clientController = require("../controllers/clientController")
const authController = require("../controllers/authController")

router.post("/send-responses", clientController.getData)
router.post("/reset-request", authController.resetPasswordRequest)
router.post("/new-password", authController.newPassword)

module.exports = router
