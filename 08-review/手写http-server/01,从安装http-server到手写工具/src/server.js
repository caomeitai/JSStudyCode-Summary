import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
let {readFile,writeFle,readdir,stat}  = fs.promises

import mime from "mime"//不同文件有不同文件头，content-type:application/json
import chalk from "chalk"//粉笔，改变字体颜色
import ejs from "ejs"
class Server{
    constructor(config){
       this.port = config.port
    }
    async handleRequest(req,res){
      let {pathname} = url.parse(req.url,true)
    //   得到文件的绝对路径
      let filepath =  path.join(__dirname,pathname)//得到绝对路径
      try{
        let statObj = await stat(filepath)//通过stat来判断是文件还是文件夹
        if(statObj.isDirectory()){
            console.log("是一个目录")
        }else{
            console.log("是一个文件")
        }   
    }catch(e){
         this.sendError(e,req,res)//路径不存在
      }
    }
    sendError(e,req,res){
        console.log(e)
        res.statusCode = 404;
        res.end("Not Found")
    }
    // 服务开启的同时，创建一台服务器
    start(){
      let server = http.createServer(this.handleRequest.bind(this))
      server.listen(this.port,()=>{
          console.log(`
${chalk.yellow(`Starting up http-server, serving `)}${chalk.blue(`./`)}
${chalk.yellow(`Available on:`)}
   ${chalk.green(`http://127.0.0.1:${this.port}`)}
   ${chalk.green(`http://192.168.1.115:${this.port}`)}
   
Hit CTRL-C to stop the server
          `)
      })
    }
}
export default Server