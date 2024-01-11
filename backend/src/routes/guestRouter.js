const Router = require("express")
const router = new Router()
const clientController = require("../controllers/clientController")

router.post("/send-responses", clientController.getData)

module.exports = router
