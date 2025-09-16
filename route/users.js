const express = require("express");
const route = express.Router();
const db = require("../db.config");
const bcypt = require("bcrypt");
route.post("/add-user", async (req, res) => {
  try {
    const hash = bcypt.hash(req.body.password, 10);
    const name = req.body.name;
    const email = req.body.email;
    const password = hash;

    const query = "INSERT INTO users(name,email,password)VALUES(?,?,?)";

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

// get users
route.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    db.query(query, (err, result) => {
      if (err) {
        console.log("something Wrong..", err);
        return res.status(500).json({
          error: "USer Not found..",
        });
      } else {
        console.log("All Users");
      }
      res.status(200).json({
        msg:"All users",
        id:result.ViesId
      })
    });
  } catch (err) {
    console.log("Error found");
    res.status(500).json({
      error:err
    });
  }
});

module.exports = route;
