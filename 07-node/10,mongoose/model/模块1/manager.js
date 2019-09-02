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
const m = new Manager({
    name:"purple",
    score:90,
})

m.save(err=>{
    if(err)console.log(err)
    console.log("保存数据！！！！")
})