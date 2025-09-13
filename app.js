const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const databaseConn = require("./db.config")


require('dotenv').config()
// console.log("ENVIROMENT",process.env);



app.use(bodyParser.json())


module.exports =app;