const { builtinModules } = require("module");

module.exports.home = function (req, res) {
  //   // printing the cookies on console
  //   console.log("Cookie: ", req.cookies);

  //   //   changing the data in cookies
  //   res.cookie("user_id", 25);

  return res.render("home", {
    title: "home",
  });
};

// module.exports.action = function (req, res) {
//   return res.end("<h1>This is the action controller</h1>");
// };
