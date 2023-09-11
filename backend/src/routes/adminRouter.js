const Router = require("express")
const router = new Router()
const { check } = require("express-validator")

const adminController = require("../controllers/adminController")

router.get("/users", adminController.getUsers)
router.get("/categories", adminController.getPendingEntrepreneur)
router.get("/users/:username", adminController.getUserBySlug)
router.delete("/users/:username", adminController.deleteUser)
router.post("/add/admin", adminController.giveAdmin)
router.post("/add/pro", adminController.givePro)

module.exports = router
