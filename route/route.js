<<<<<<< HEAD

const express = require('express')
const route = express.Router()
const costumerController = require("../controller/controller")
route.post("/register", costumerController.costumerRegistration)
route.post("/login", costumerController.costumerLogin)
route.post("/transaction", costumerController.Deposite)
route.get("/balance", costumerController.balanceDisplay)






=======

const express = require('express')
const route = express.Router()
const costumerController = require("../controller/controller")
route.post("/register", costumerController.costumerRegistration)
route.post("/login", costumerController.costumerLogin)
route.post("/transaction", costumerController.Deposite)
route.get("/balance", costumerController.balanceDisplay)
route.get("/accountStatement", costumerController.accountStatement)
route.post("/miniStatement", costumerController.miniStatement)
route.post("/changePassword", costumerController.changePassword)






>>>>>>> f573e3afcb3274fe925e958ce14a66c201a3cd9b
module.exports = route