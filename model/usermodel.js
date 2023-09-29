var mongoose = require('mongoose');

userSchema = new mongoose.Schema({
     user_no:{
          type: String,
     },
     email:{
          type: String,
     },
     password:{
          type: String
     }
})

module.exports = mongoose.model('user',userSchema)