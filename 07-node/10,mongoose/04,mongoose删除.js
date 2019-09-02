const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
const schema = mongoose.Schema({
    name:String,
    score:Number,
    status:Number,
})

const Manager = mongoose.model("manager",schema)
const m = new Manager({
    name:"blue",
    score:67,
    status:0
}) 
m.save(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("保存OK！")
    }
})

// 初参是条件，然后有个回调函数
Manager.deleteOne({"_id":"5d6cb55045b2514974fa1b8c"},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }

})