const mysql = require("mysql2") 
require("dotenv").config();

const dbConnect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB_NAME,
});
dbConnect.connect((err) => {
  if (err) {
    console.log("DB offline:", err);
  } else {
    console.log("DB online");
  }
});

module.exports = dbConnect;
