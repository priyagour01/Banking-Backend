<<<<<<< HEAD
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
=======
const { autoPassword } = require('../middleware/autoPassword'); // Destructure the function
const nodemailer = require("nodemailer");
const costumerModel = require("../model/model")
const transactionModel = require("../model/transactionModel");


const costumerRegistration = async (req, res) => {
    const { name, email, number, date, address, city, state } = req.body;
    console.log(req.body); // Fix typo: res.body -> req.body

    const myPass = autoPassword(); // Call the function directly
    const data = await costumerModel.create({
        name:name,
        email:email,
        date:date,
        city:city,
        state:state,
        number:number,
        address:address,
        password:myPass
    })


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hr6014158@gmail.com", // Fix email address
            pass: "hjpq juuv htrt xkwp", // Ensure this is the correct app password
        },
    });

    let maildetails = {
        from: "hr6014158@gmail.com", // Fix email address
        to: email,
        subject: "E-Banking registration",
        text: `Dear ${name}, your Account successfully created \n Your password is ${myPass}`,
    };

    transporter.sendMail(maildetails, (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent successfully");
            res.send("OK");
        }
    });
};
const costumerLogin = async(req ,res) => {
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
 const accountStatement = async(req,res)=>{
    const {userid}= req.query
    const data = await transactionModel.find({costumerid: userid}).sort({date:-1}).limit(10)
    res.status(200).send(data)
 }
 const miniStatement = async(req,res)=>{
    const {userid, endDate, beginDate}= req.body;
    const data = await transactionModel.find({$and:[{costumerid:userid},{"date": {
        $gte: beginDate,
        $lte: endDate
    }}]}).sort({data:-1})
  
    res.send(data)
 }
 const changePassword = async (req, res) => {
    const { oldpass, newpass, renewpass, userid } = req.body;

    try {
        const customer = await costumerModel.findById(userid);

        if (!customer) {
            return res.status(404).send({ msg: "User not found" });
        }

        if (customer.password !== oldpass) {
            return res.status(400).send({ msg: "Old password doesn't match" });
        }

        if (newpass !== renewpass) {
            return res.status(400).send({ msg: "New passwords don't match" });
        }

        await costumerModel.findByIdAndUpdate(userid, { password: newpass });

        res.send({ msg: "Password successfully changed" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal server error" });
    }
};
 
module.exports = {
    costumerRegistration,
    costumerLogin,
    Deposite,
    balanceDisplay,
    accountStatement,
    miniStatement,
    changePassword

>>>>>>> f573e3afcb3274fe925e958ce14a66c201a3cd9b
};