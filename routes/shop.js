const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  //render default template engine define in app.js --> app.set("view engine", "pug");
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
