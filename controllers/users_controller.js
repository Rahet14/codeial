// import model
const User = require("../models/user");

module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (err) {
        console.log(
          "Error in finding the user id from the for fetching the profile page"
        );
        return res.redirect("/users/sign-in");
      }
      if (user) {
        return res.render("user_profile", {
          title: "Profile",
          user: user,
        });
      } else {
        return res.redirect("/users/sign-in");
      }
    });
  } else {
    return res.redirect("/users/sign-in");
  }
};

// render sign in page
module.exports.signIn = function (req, res) {
  res.render("user_sign_in", {
    title: "Codeial | Sign in",
  });
};

// render sign up page
module.exports.signUp = function (req, res) {
  res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("Password doesn't match");
    return res.redirect("back");
  }
  //   console.log("creating user");
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding User for signing up");
      return res.redirect("/users/sign-in");
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating User for signing up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      console.log("User already exist");
      return res.redirect("/users/sign-in");
    }
  });
};

// get the sign in data
module.exports.createSession = function (req, res) {
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding the user for sign in");
      return res.redirect("back");
    } else {
      // user found
      // check password
      if (user.password != req.body.password) {
        console.log("Password doesn't match");
        return res.redirect("back");
      } else {
        // handle session creation
        res.cookie("user_id", user._id);
        return res.redirect("/users/profile");
      }
    }
  });
};

// controller for signout
module.exports.signOut = function (req, res) {
  res.clearCookie("user_id");
  res.redirect("back");
};
