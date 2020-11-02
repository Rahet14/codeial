const express = require("express");

const router = express.Router();
const userController = require("../controllers/users_controller");

console.log("user Router Loaded");

router.get("/profile", userController.profile);
router.use("/posts", require("./posts"));

module.exports = router;
