const Router = require("express");
const router = new Router();
const { check } = require("express-validator");
const upload = require("../services/publicImageUpload");

const adminController = require("../controllers/adminController");
const statsController = require("../controllers/statsController");

router.get("/projects", adminController.getProjectsByStatus);
router.get("/projects/all", adminController.getProjects);
router.get("/project/:id", adminController.getProjectById);
router.put("/project/:id/status", adminController.changeProjectStatus);
router.patch("/project/:id/price", adminController.updateProjectPriceTotal);
router.get("/users", adminController.getUsers);
router.put("/users/update/:id", adminController.updateUser);
router.get("/approved/users", adminController.getApprovedUsers);
router.get("/pending/users", adminController.getPendingUsers);
router.put("/pending/:username", adminController.Approve);
router.get("/categories", adminController.getPendingEntrepreneur);
router.get("/users/:username", adminController.getUserBySlug);
router.get("/user", adminController.getUserByEmail);
router.delete("/users/remove/:email", adminController.deleteUser);
router.post("/add/admin", adminController.giveAdmin);
router.post("/add/pro", adminController.givePro);
router.get("/logs", adminController.getLogs);
router.get("/logs/download/:period", adminController.downloadLogs);

router.get("/stats", statsController.getStats);
router.get("/server-stats", statsController.getServerStats);

router.put("/work/:id", adminController.updateProject);
router.delete("/work/:id", adminController.deleteProject);
router.post("/work", adminController.createProject);
router.post("/upload-image", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const filePath = `/public/${req.file.filename}`;
  res.json({ filePath });
});
module.exports = router;

module.exports = router;
