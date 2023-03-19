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
async function insertInTable(data) {
  const sql =
  `INSERT INTO customers (first_name, last_name, email) VALUES (?, ?, ?);`;
  con.query(sql, [data[0], data[1], data[2]], function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(`1 record inserted`);
    }
  });
}
async function deleteFromTable(data) {
  const sql = "DELETE FROM customers WHERE first_name = ? AND last_name = ? AND email = ?";
  con.query(sql, [data[0], data[1], data[2]], function(err, result, fields) {
    if (err) {
      throw err
    } else {
      console.log(`1 RECORD DELETED!`);
    }
  })
}

module.exports = { router1, insertInTable, deleteFromTable};
