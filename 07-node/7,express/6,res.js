// 1，res的方法send直接发送响应的内容，可以是普通字符串，
//    也可以是html标签，不需要写其它的头信息
// const express = require("express")
// const app = express()
// app.get("/",(req,res)=>{
//    res.send("hello，碳尼")
//    res.send("<ul><li>html</li><li>css</li></ul>")
// })
// app.listen(3000)


// 2，res的方法sendFile  用来发送文件，我们可以用来发送一个html文件
// const express = require("express")
// const app = express()
// app.get("/",(req,res)=>{
//     // 这里使用dirname是拼接上文件，而非使用,
//     console.log(__dirname) //C:\北京学习\JSStudyCode-Summary\07-node\7,express
//     res.sendFile(__dirname+"/index.html")
// })
// app.listen(3000)

// 利用路径path.join  
// const express = require("express")
// const path = require("path")
// const app = express()
// app.get("/",(req,res)=>{
//     console.log(__dirname) //C:\北京学习\JSStudyCode-Summary\07-node\7,express
//     res.sendFile(path.join(__dirname,"index.html"))
// })
// app.listen(3000)


// 3，res的json方法可以用来发送一个json格式的数据，
// 就是将发过来的数据都转成json格式，全部加上""
// const express = require("express")
// const app = express()
// app.get("/",(req,res)=>{
//     //json的两种格式：数组里放对象，对象里放数组
//     res.json([{name:"tanni",age:12}])  
//     res.json({name:"tanni",age:12})
// })
// app.listen(3000)


// 4，res的方法redirect()  进行重定向
const express = require("express")
const app = express()
app.get("/",(req,res)=>{
  res.redirect("/home")
})
app.listen(3000)