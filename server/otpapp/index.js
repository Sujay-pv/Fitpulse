const express = require("express");
const cors = require("cors");
const app = express();
// const jwt = require('jsonwebtoken');
const otpGenerator = require("otp-generator");
const db = require("./connect");
const postModel = require("./postModel");
const createUser = require("./createUser");
const cookieparser = require("cookie-parser");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieparser());



const authToken = '38c2b334a856647b277bb3c453c96db9'; // Your Auth Token from www.twilio.com/console
const accountSid = 'AC196157eb740751fafd18c37842b2377d'; //deatils of twilio

const client = require('twilio')(accountSid, authToken);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sendOTP = async (otp, mobileNumber) => {
  console.log("inside OTP");
  client.messages
    .create({
      body: `Verify OTP ${otp}`,
      messagingServiceSid: "MG4cbb198c04d07178596a6c5d8a30e7ed",
      to: "+91" + mobileNumber,
    })
    .then((message) => console.log(message.sid));
};
//CURD Operations
app.post("/sendotp", async (req, res) => {
  const { mobileNumber } = req.body;
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
    digits: true,
  });
  console.log(otp);
  try {
    await postModel.create({ otp, mobileNumber }).then((response) => {
      sendOTP(otp, mobileNumber);
      res.json({ mesg: "OTP sent successfully", id: response.id });
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/verifyotp", async (req, res) => {
  const { otp, id } = req.body;
  console.log(otp, id);
  try {
    await postModel.findById(id).then((response) => {
      console.log("response", response);
      if (response && response.otp == otp) {
        console.log("Validated successfully", otp);
        res.json({ mesg: "Validated successfully" });
      } else {
        // res.json({mesg : 'Invalid OTP'})
        res.status(400).json({ mesg: "Invalid OTP" });
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/createUser", async (req, res) => {
  console.log("Create User called");
  const { name, mobileNumber, email, password } = req.body;
  //const verificationotp = Math.floor(100000 + Math.random() * 9000);
  // const isOTPVerfied = false
  // console.log(title,otp);
  try {
    await createUser.create({ name, email, mobileNumber, password }).then(
      (response) => {
        res.json({ status: "ok", message: "Successfully created user" });
      },
      (err) => {
        res.status(400).json({ status: "bad request" });
      }
    );
  } catch (error) {
    //  res.status(500).send(error);
  }
});
// app.post('/validateotp', async(req,res)=>{
//   const  { mobileNumber , otp} = req.body;
//   // const otp = Math.floor(1000 + Math.random() * 9000);
//   // console.log(title,otp);
//   try {
//      await createUser.find({'mobileNumber' : mobileNumber}).then(response=>{
//       console.log(response);
//       if(response[0].verificationotp == otp){
//         res.json({mesg : 'Validated successfully'})
//       }else{
//         res.json({mesg : 'Invalid OTP'})
//       }
//     })
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // const otp = Math.floor(1000 + Math.random() * 9000);
  // console.log(title,otp);
  try {
    await createUser.find({ email: email }).then((response) => {
      console.log(response);
      if (response[0].email == email && response[0].password == password) {
        const data = {
          time: Date(),
          mailID: email,
          password,
        };
        //  const token = jwt.sign(data, jwtSecretKey);
        console.log("im here");
        res.cookie("tokens", email).json("ok");

        // res.json({status : 'ok' ,mesg : 'Validated successfully'})
      } else {
        res.status(401).send({ mesg: "Invalid email Id or password" });
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post('/verifydata', async(req,res)=>{
  const  { email,mobileNumber } = req.body;
  // if(!email || !mobileNumber){
  //   res.status(400).json({mesg : 'Invalid mail or mobile number'})
  // }
  console.log(email);
  try {
    await createUser.find({email : email}).then(response=>{
      const list = response.filter(user=>user.email==email)
      console.log('response email',list)
      if(list.length > 0){
        res.status(400).json({mesg : 'Mail already exists'})
      }else{
        validateMobileNumber(mobileNumber, res)
      }
    })
   
  } catch (error) {
    res.status(500).send(error);
  }
});

async function  validateMobileNumber (mobileNumber, res){
  await createUser.find({mobileNumber : mobileNumber}).then(response=>{
    const list = response.filter(user=>user.mobileNumber==mobileNumber)
    console.log('response mobileNumber',list)
    if(list.length > 0){
      res.status(400).json({mesg : 'mobileNumber already exists'})
    }else{
      res.json({status:"ok", message : 'Valid mail id and mobile number'})
    }
  })
}

// app.get('/', async(req,res)=>{
//   try {
//     const posts = await postModel.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).send(error)

//   }
// })

// app.get('/:id', async(req,res)=>{
//   const {id} = req.params
// try {
//   const post = await postModel.findById(id);
//   res.json(post);
// } catch (error) {
//   res.status(500).send(error)
// }
// })
app.get("/getcookie", (req, res) => {
  const token = req.cookies;
  res.json(token);
});
app.get("/logout", (req, res) => {
  res.clearCookie("tokens");
  res.send("cookie cleared");
});

app.listen(3007, () => {
  console.log("App listening to 3007");
});
