<<<<<<< HEAD
const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    costumerid:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"costumer"
    },
    amount:Number,
    status:String,
    date:{
        type:Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model("transaction", transactionSchema)
=======
const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    costumerid:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"costumer"
    },
    amount:Number,
    status:String,
    date:{
        type:Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model("transaction", transactionSchema)
>>>>>>> f573e3afcb3274fe925e958ce14a66c201a3cd9b
