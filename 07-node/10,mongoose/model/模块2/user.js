// 在此模块使用，就要导入
const mongoose = require("./db")

// 之前写的一堆不必再写，直接定义schema
const userschema = mongoose.Schema({
    name:String,
    score:Number,
    status:{
        type:Number,
        default:1
    }
})

// 依据schema来创建model
const  User =  mongoose.model("User",userschema)
module.exports = User