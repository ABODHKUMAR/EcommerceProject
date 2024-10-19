const mongoose = require('mongoose');
const connectDatabase = new Promise((resolve,reject)=>{

  mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{

    resolve("Connected to Data Base Sucessfully");

  }).catch((err)=>{

    reject("Facing Issue with Data Base Connectivity. Error: " + err);

  })

})



module.exports = connectDatabase;
