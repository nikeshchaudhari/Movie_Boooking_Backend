const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const databaseConn = require("./db.config")
const userRoute = require("./route/users")

require('dotenv').config()
// console.log("ENVIROMENT",process.env);



app.use(bodyParser.json())
app.use("/users",userRoute)

module.exports =app;