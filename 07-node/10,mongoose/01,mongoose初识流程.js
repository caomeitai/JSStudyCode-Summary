const mongoose = require("mongoose")

// 建立连接
mongoose.connect("mongodb://127.0.0.1:27017/myapp")

// 定义schema
let UserSchema = mongoose.Schema({
    username:String,
    age:Number,
    status:Number
})

// 创建model  以上面定义的schema格式来创建文档  
let User = mongoose.model("User",UserSchema)

// 实例化model  传递参数以schema的格式
let u = new User({
    username:"tanni",
    age:12,
    status:1 
})

// 最后是在数据库保存数据
u.save(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("保存数据成功了")
    }
})


// 练习
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/myapp")
// let userSchema = mongoose.Schema({
//     name:String,
//     score:Number,
//     status:Number,
// })

// let User = mongoose.model("User",userSchema)
// let u = new User({
//     name:"tania",
//     score:34,
//     status:0,
// })

// u.save(function(err){
//   if(err){
//       console.log(err)
//   }else{
//       console.log("数据保存ok!")
//   }
// })