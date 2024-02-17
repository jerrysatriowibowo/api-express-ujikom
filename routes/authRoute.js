const router = require("express").Router();
const userController = require("../controllers/authController");

router.post("/api/v1/login", userController.login);
router.post("/api/v1/register", userController.register);

module.exports = router;