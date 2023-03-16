const express = require("express");
const mysql = require("mysql");
const router1 = express.Router();
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N1ikola1i14321BG!",
  database: "maildb",
});
con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected to Database!");
  }
});
function insertInTable(data) {
  const sql =
  `INSERT INTO customers (first_name, last_name, email) VALUES ('${data[0]}', '${data[1]}', '${data[2]}');`;
  con.query(sql, [data], function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(`First name:  ${data[0]}\nLast Name:  ${data[1]}\nEmail:  ${data[2]}\n`);
      console.log(`1 record inserted`);
    }
  });
}

module.exports = { router1, insertInTable };
