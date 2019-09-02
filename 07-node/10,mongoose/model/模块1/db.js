// 仅仅抽出了通用部分
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp",{userNewUrlparse:true},err=>{
    if(err) return 
    console.log("连接成功啦")
})

module.exports = mongoose