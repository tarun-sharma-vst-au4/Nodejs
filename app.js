const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//route for page not found
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
