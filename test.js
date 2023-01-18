const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="product" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  //extracting info from the body
  console.log(req.body);
  res.redirect("/");
});
