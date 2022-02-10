const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        //require:true
    },
    firstName:{
        type: String      
    },
    lastName:{
        type: String
    },
    password:{
        type:String
    },
    createdon:{
        type:Date
    }
   
})



const User = mongoose.model('User', userSchema)
module.exports = User;