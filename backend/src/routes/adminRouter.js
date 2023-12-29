const Router = require("express")
const router = new Router()
const { check } = require("express-validator")

const adminController = require("../controllers/adminController")

router.get("/projects", adminController.getProjectsByStatus)
router.get("/projects/all", adminController.getProjects)
router.get("/project/:id", adminController.getProjectById)
router.put("/project/:id/status", adminController.changeProjectStatus)
router.get("/users", adminController.getUsers)
router.get("/approved/users", adminController.getApprovedUsers)
router.get("/pending/users", adminController.getPendingUsers)
router.put("/pending/:username", adminController.Approve)
router.get("/categories", adminController.getPendingEntrepreneur)
router.get("/users/:username", adminController.getUserBySlug)
router.get("/user", adminController.getUserByEmail)
router.delete("/users/:username", adminController.deleteUser)
router.post("/add/admin", adminController.giveAdmin)
router.post("/add/pro", adminController.givePro)

module.exports = router
