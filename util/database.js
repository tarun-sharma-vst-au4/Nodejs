// const mysql = require("mysql2");

// //crweating connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "Alex231994",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "Alex231994", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
