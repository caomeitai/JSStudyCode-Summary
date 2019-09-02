const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
let manager = mongoose.Schema({
    name:String,
    score:Number,
    status:Number,
})

const Manager = mongoose.model("Manager",manager)

const m = new Manager({
    name:"yellow",
    score:78,
    status:0
})

// 首参：更新的条件；然后：更新内容；回调函数：成功之后返回 { n: 1, nModified: 1, ok: 1 }
Manager.updateOne({"_id":"5d6cb4ad23385b23fc8aa8c0"},{"name":"tanni"},function(err,data){
    if(err) console.log(err)
    console.log(data)
})


