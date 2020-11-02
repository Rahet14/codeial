const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts_controller");

router.get("/post", postsController.posts);

module.exports = router;