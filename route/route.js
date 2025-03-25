
const express = require('express')
const route = express.Router()
const costumerController = require("../controller/controller")
route.post("/register", costumerController.costumerRegistration)
route.post("/login", costumerController.costumerLogin)
route.post("/transaction", costumerController.Deposite)
route.get("/balance", costumerController.balanceDisplay)






module.exports = route