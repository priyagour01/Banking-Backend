const { autoPassword } = require('../middleware/autoPassword'); // Destructure the function
const nodemailer = require("nodemailer");
const costumerModel = require("../model/model")
const transactionModel = require("../model/transactionModel");
const model = require('../model/model');
const costumerRegistration = async (req, res) => {
    const { name, email, number, date, address, city, state } = req.body;

    const myPass = await autoPassword();
    console.log(req.body);
    const data = await costumerModel.create({
        name,
        email,
        date,
        city,
        state,
        number,
        address,
        password: myPass,
    });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "priyagour400@gmail.com",
            pass: "wgzk vlhf krhv amoz",
        },
    });

    const maildetails = {
        from: "priyagour400@gmail.com",
        to: email,
        subject: "E-Banking registration",
        text: `Dear ${name}, your Account successfully created \n Your password is ${myPass}`,
    };

    try {
        await transporter.sendMail(maildetails);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }

    res.status(200).send("Registration Successfully");
};


const costumerLogin = async (req, res) => {
    let {email, password} = req.body
    const data = await costumerModel.findOne({email: email})
    try {
        if(!data)
        {
            return res.status(400).send("invalid email")
        }
        if(data.password !=password)
        {
            return res.status(400).send("invalid password")
        }
        res.status(200).send(data)

    } catch (error) {
       res.status(400).send(error) 
    }
   
}
const Deposite = async(req, res)=>{
    const {costumerid, status, amount} = req.body
    const data = await transactionModel.create({
        amount:amount,
        status:status,
        costumerid:costumerid
    })
    res.status(200).send(data)
}
 const balanceDisplay = async(req,res)=>{
   const {userid}= req.query
   const data = await transactionModel.find({costumerid: userid})
   res.status(200).send(data)
 }
module.exports = {
    costumerRegistration,
    costumerLogin,
    Deposite,
    balanceDisplay
};