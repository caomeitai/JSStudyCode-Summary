const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
let managerschema = mongoose.Schema({
    name:String,
    score:Number,
    status:Number,
})

const Manager = mongoose.model("Manager",managerschema)

const m = new Manager({
    name:"jintan",
    score:56,
    status:1
})

m.save(function(err){
    if(err)console.log(err)
    console.log("保存ok!")
})

// 查询数据  在这里的查询是基于数据库model  
Manager.find({},function(err,data){
    if(err)console.log(err)
    console.log(data)
    // [ { _id: 5d6cb4ad23385b23fc8aa8c0,
    //     name: 'jintan',
    //     score: 56,
    //     status: 1,
    //     __v: 0 } ]
})


// 在查询时，也走了一次save,将数据再次存入了数据库