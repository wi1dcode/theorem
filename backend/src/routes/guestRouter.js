const Router = require("express");
const router = new Router();
const clientController = require("../controllers/clientController");
const proController = require("../controllers/proController");
const authController = require("../controllers/authController");

router.post("/send-responses", clientController.getResponses);
router.post("/pro-responses", proController.getResponses);
router.post("/reset-request", authController.resetPasswordRequest);
router.post("/new-password", authController.newPassword);
router.get("/activate/:link", authController.activate);
router.get("/google-reviews", authController.getGoogleReviews);
router.get("/work", clientController.getProjects);
router.get("/work/:id", clientController.getProjectById);

module.exports = router;
