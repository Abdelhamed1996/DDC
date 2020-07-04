const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    },
    gender:{
        type: String,
        required:true
    }
})


module.exports = User = mongoose.model('user', Userschema)