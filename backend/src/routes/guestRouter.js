const Router = require("express")
const router = new Router()
const { check } = require("express-validator")
const clientController = require("../controllers/clientController")

router.post("/send-responses", clientController.getData)

module.exports = router
