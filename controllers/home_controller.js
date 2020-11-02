const { builtinModules } = require("module");

module.exports.home = function (req, res) {
  return res.render("home", {
    title: "home",
  });
};

// module.exports.action = function (req, res) {
//   return res.end("<h1>This is the action controller</h1>");
// };
