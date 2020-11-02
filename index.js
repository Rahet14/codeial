const express = require("express");
const app = express();

const expressLayouts = require("express-ejs-layouts");

const port = 8000;

// Express Layouts
app.use(expressLayouts);

// extract style and scripts from subpages into layputs
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Express Router; Router is loaded before loading the page
app.use("/", require("./routes"));

// Set up static folder
app.use(express.static("./assets"));

// set up view engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
    return;
  }

  console.log(`Server is running on ${port}`);
});
