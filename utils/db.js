const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = () =>{
    try {
        mongoose.connect(process.env.DB_Connect).then(()=>{
            console.log("Database connected")
        })
    } catch (error) {
        console.log("Database connection failed")
    }
}
module.exports = dbConnect