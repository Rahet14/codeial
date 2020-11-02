const express = require("express");
const app = express();

const port = 8000;

// Express Router; Router is loaded before loading the page
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
    return;
  }

  console.log(`Server is running on ${port}`);
});
