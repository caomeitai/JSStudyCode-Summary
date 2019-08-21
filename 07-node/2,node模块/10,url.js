const http = require("http")
// 引进URL模块
const url = require("url")
// req是请求对象  通过req来获取url
let server =  http.createServer((req,res)=>{
// console.log(req)  //IncomingMessage

// 在浏览器的地址栏中输入一个什么样的路径，就可以通过req.url得到
// console.log(req.url) //req.url是一个字符串
//利用了url模块，将上面的req.url字符串转成对象，从而解析出路径名和查询字符串 但它们仍是字符串
  let {pathname,query} = url.parse(req.url)//利用解构赋值得到路径名和查询字符串
  console.log(pathname,query)
//   query查询字符串虽然通过url模块解析出来了，但仍为字符串，而非对象
//   console.log(pathname,query.name)  //出错啦
  res.write("hello")
  res.end()  
})
server.listen(3000,()=>{
    console.log("服务已启动...")
})

// Url {
//     protocol: null,//协议
//     slashes: null,
//     auth: null, //认证
//     host: null,//主机
//     port: null,//端口
//     hostname: null,//主机名
//     hash: null,//hash
//     search: null,
//     query: null,//查询字符串
//     pathname: '/acjckd', //路径名
//     path: '/acjckd',//路径 = 路径名 + 查询字符串
//     href: '/acjckd' }