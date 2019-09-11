import program from "commander"
import Server from "./server"


program
  .option("-p,--port<val>","set http-server port")
  .parse(process.argv)

  let config = {
      port:8080
  }
  Object.assign(config,program)//将program的内容挂到config上面

// 开启一台服务
let server = new Server(config)//传递服务器端口config
server.start()  
        
