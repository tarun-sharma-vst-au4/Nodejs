const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log("Result is ", result[0], result[1]);
//   })
//   .catch((err) => {
//     console.log("Error is ", error);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(error);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(Product, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  //.sync({ force: true })
  .sync()
  .then((result) => {
    //console.log("Result is ", result);
    return User.findByPk(1);
    //app.listen(3000);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Tarun", email: "tarun@gmail.com" });
    }

    return user;
  })
  .then((user) => {
    console.log("User is ", user);
    return user.createCart();
    //app.listen(3000);
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log("Error is ", error);
  });
