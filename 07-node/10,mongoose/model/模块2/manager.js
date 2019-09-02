const mongoose = require("./db")

const managerschema = mongoose.Schema({
    name:String,
    score:Number,
    status:{
        type:Number,
        default:0
    }
})

// 依据schema来创建model
const  Manager =  mongoose.model("Manager",managerschema)

//仅仅创建model，然后导出 
module.exports = Manager