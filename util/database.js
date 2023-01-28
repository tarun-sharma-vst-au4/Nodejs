const mysql = require("mysql2");

//crweating connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Alex231994",
});

module.exports = pool.promise();
