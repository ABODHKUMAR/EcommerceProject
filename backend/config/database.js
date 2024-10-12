const mongoose = require('mongoose');
const connectDatabase = ()=>{
  mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to Data Base Sucessfully");
  }).catch((err)=>{
    console.log("Facing Issue with Data Base Connectivity. Error: " + err);
  })
}



module.exports = connectDatabase;
