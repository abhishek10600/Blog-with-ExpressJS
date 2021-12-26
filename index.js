const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.engine("handlebars", engine({
  defaultlayout:"main"
}));

app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/routes.js")));

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
