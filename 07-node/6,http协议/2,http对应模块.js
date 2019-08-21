let http = require("http")
const url = require("url")
const querystring = require("querystring")
let server = http.createServer((req,res)=>{
//   let urlObject =url.parse(req.url)
//   console.log(urlObject)  //  解析出路径，将其转成一个对象
   
let {pathname,query} = url.parse(req.url)
//    console.log(pathname)
//    console.log(query)  字符串
// 利用querystring模块将其解析成对象
//   console.log(querystring.parse(query))  //{ name: 'wangcai', age: '12' }
})
server.listen(3000,()=>{
    console.log("服务器跑起来啦...")
})