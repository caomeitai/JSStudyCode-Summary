const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp",{useNewUrlParser:true},err=>{
    if(err) return  //连接数据库不成功，直接结束程序
    console.log("连接数据库成功啦.......") 
})
const schema = mongoose.Schema({
    name:String,
    score:Number,
    status:{
        type:Number,
        default:1
    }
})

const Manager =  mongoose.model("manager",schema)

 const m = new Manager({
     name:"skyblue",
     score:89,
 })
 m.save(function(err){
     if(err)console.log(err)
     console.log("保存数据欧了！")
 })