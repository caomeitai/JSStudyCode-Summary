import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
let {readdir,stat} = fs.promises

import mime from "mime"
import chalk from "chalk"
import ejs from "ejs"

let template =  fs.readFileSync(path.resolve(__dirname,"../template.html"),"utf-8")
class Server{
    constructor(config){
    this.port = config.port
    this.template = template
    }
    async handleRequest(req,res){
        let {pathname} = url.parse(req.url,true)
        // 当路径名为中文时，浏览器会自动编码，而解码需要手动操作
         pathname = decodeURIComponent(pathname)
        // let filepath =  path.join(__dirname,pathname)
        // console.log(filepath)// C:\Users\kanghuanying\Desktop\httpServer\dist\---)获得绝对路径
        // console.log(process.cwd())// C:\Users\kanghuanying\Desktop\httpServer--->获得当前工作目录
        // 渲染（托管）当前工作目录文件夹而非dist文件夹
        let filepath =  path.join(process.cwd(),pathname)
        try{
            let statObj = await stat(filepath)
            if(statObj.isDirectory()){
              let dirs = await readdir(filepath)
              // 需要判断访问路径是根目录，还是啥
              let templateS = ejs.render(this.template,{dirs,path:pathname==="/"?"":pathname})  
              res.setHeader("Content-Type","text/html;charset=utf-8")
              res.end(templateS) 
            }else{
                this.sendFile(filepath,req,res,statObj)
            }
        }catch(e){
           this.sendError(e,req,res)
        } 
    }
    sendFile(filepath,req,res,statObj){
      res.setHeader("Content-Type",mime.getType(filepath)+";charset=utf-8")
      fs.createReadStream(filepath).pipe(res)
    }
    sendError(e,req,res){
       res.statusCode=404;
       res.end("NOT Found")
    }
    start(){
    let server = http.createServer(this.handleRequest.bind(this))//这里的handle如果加上小括号就在创建服务器时自动调用了      let server = http.cr
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
