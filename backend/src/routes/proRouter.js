const Router = require("express")
const router = new Router()

const proController = require("../controllers/proController")
const proMiddleware = require("../middlewares/proMiddleware")

router.get("/userinfo", proMiddleware(), proController.getMe)

module.exports = router
