const mongoose = require('mongoose')
const msgSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    msg:{
        type: String      
    },
    room:{
        type: String
    }
   
})

const Msg = mongoose.model('msg', msgSchema)
module.exports = Msg;