const express = require("express")
const path = require("path")
const app = express()

// 托管静态资源
// app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"1,jsonp跨域之brower.html"))
})

app.listen(5000)