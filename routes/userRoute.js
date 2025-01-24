const express = require('express');
const { loginUser, registerUser, getUserProfile } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post("/register",registerUser);    //localhost:9000/api/user/register

userRouter.post("/login",loginUser);         //localhost:9000/api/user/login

userRouter.get("/profile", getUserProfile); // localhost:9000/api/user/profile


module.exports = userRouter;






// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");

// const USER = require('../models/userModel');
// const router = express.Router();


// router.post('/register',async (req,res)=>{ 

//     const {username, number, email, password} = req.body
// //    const user = USER.insertMany(req.body);
// const salt = await bcrypt.genSalt(10);
// const hashedpassword = await bcrypt.hash(password, salt);

// const user = new USER({
//     "username": username,
//     "number" : number,
//     "email" :email,
//     "password": hashedpassword
// })
// const result = user.save();
//    console.log(result);
//    res.send("user created.........using encryption")
   
// })

// router.post('/login',async (req,res)=>{
    
// const {email, password} = req.body;

// const user = await USER.findOne({email});
// if(!user){
//     res.send("user not found");
// }

// const isMatch = bcrypt.compare(password, user.password);
// if(!isMatch){
//     res.send("password is wrong")
// }

// res.send("Login Sucess")

// })

// router.get('/profile', async(req,res)=>{

//   const userProfile = await USER.find(req.body.userId);
   
//   res.json(userProfile);
// })


// module.exports = router;