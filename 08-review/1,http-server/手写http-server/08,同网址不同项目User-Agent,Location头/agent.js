const http = require("http")

http.createServer((req,res)=>{
  let userAgent = req.headers['user-agent']
  // console.log(userAgent)
  // 如果是手机端，调到百度
  if(userAgent.includes("iPhone")){
      res.statusCode = 302
      res.setHeader("Location","http://www.baidu.com")
      res.end()
  }else{
  // 如果是PC端，调到京东
  if(userAgent.includes("iPhone")){
    res.statusCode = 302
    res.setHeader("Location","http://www.jd.com")
    }
  }
}).listen(3000)