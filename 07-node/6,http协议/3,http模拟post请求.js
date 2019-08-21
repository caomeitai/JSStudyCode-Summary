// 模拟了post请求
let http = require("http")
const url = require("url")
const querystring = require("querystring")
let server = http.createServer((req,res)=>{
    // 去拿到请求数据最终转成
    let arr = []
    req.on("data",function(chunk){
      arr.push(chunk)
    })
    req.on("end",function(){
    //    console.log(arr) //[ <Buffer 6e 61 6d 65 3d 74 61 6e 6e 69 26 61 67 65 3d 31 32> ]
      let str = Buffer.concat(arr).toString()
    //   console.log(str) //转成字符串形式
      let strObject = querystring.parse(str)
      console.log(strObject) //转成对象，json的形式

    //   响应的数据
      res.statusCode = 200
      res.setHeader("a",1)
      res.end(JSON.stringify(strObject))  //json字符串 需要将所有的内容都加上""
      
    })
})
server.listen(3000,()=>{
    console.log("服务器跑起来啦...")
})