const express = require('express');
const bcrypt = require('bcrypt');
const USER = require('../models/userModel');
const router = express.Router();


router.post('/register', (req,res)=>{ 

   const user = USER.insertMany(req.body);
   console.log(user);
   res.send("user created")
   
})

router.post('/login', (req,res)=>{

})









module.exports = router;