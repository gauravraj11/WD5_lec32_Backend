const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const mongoURL = process.env.mongoURL;

 const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL).then(()=> console.log("database conected"));
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with failure
    }
  };

  module.exports = connectDB;