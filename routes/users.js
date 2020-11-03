const express = require("express");

const router = express.Router();
const userController = require("../controllers/users_controller");

console.log("user Router Loaded");

router.get("/profile", userController.profile);

// Route for sign up page
router.get("/sign-up", userController.signUp);

// Route for creating user
router.post("/create", userController.create);

// Route for sign in page
router.get("/sign-in", userController.signIn);

// Route for session creation with sign in
router.post("/create-session", userController.createSession);

// Route for sign out
router.get("/sign-out", userController.signOut);

router.use("/posts", require("./posts"));

module.exports = router;
