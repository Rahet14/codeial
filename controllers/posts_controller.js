const Post = require("../models/post");

module.exports.posts = function (req, res) {
  return res.end("<h1>Posts</h1>");
};

module.exports.create = function (req, res) {
  console.log("rahet", req.body);
  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("error in creating the post");
        return;
      } else {
        return res.redirect("back");
      }
    }
  );
};
