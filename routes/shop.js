const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.send("<h1>Hello from middleware</h1>");
  //__dirname - holds absolute path of our project so it will be - '/Users/taruns117/Downloads/01-understanding-npm-scripts/routes/
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
