const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;


module.exports  = async ()=>{
    try {
       const db = await mongoose.connect(MONGO_URI);
       console.info('Connecting to mongodb...');
       db.connection.readyState === 1? console.log("Database conected successfully") : console.log("Database connection failed");
        
    } catch (error) {
        console.log("message : ",error.message);
    } 
};