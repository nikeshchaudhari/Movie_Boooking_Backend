const express = require("express");
const route = express.Router();
const db = require("../db.config");

route.post("/add-user", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const query = "INERT INTO users(name,email,password)VALUES(?,?,?)";

    db.query(query, [name, email, password], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Data Insert Failed...",
        });
      } else {
        console.log("Data Insert");
      }
      res.status(200).json({
        msg: "Data Insert",
        id: result.insertId,
      });
    });
  } catch (err) {
    console.log("Not insert");
    res.status(500).json({
      error: err,
    });
  }
});

module.exports = route;
