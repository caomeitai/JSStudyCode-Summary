import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
let {readdir,stat} = fs.promises

import mime from "mime"
import chalk from "chalk"
import ejs from "ejs"

// 读出来模板
let template =  fs.readFileSync(path.resolve(__dirname,"../template.html"),"utf-8")
// console.log(template)//ok
class Server{
    constructor(config){
    this.port = config.port
    //将template属性挂在实例上，可以保证属性通过this来获取，不被参数覆盖掉
    this.template = template
    }
    async handleRequest(req,res){
        let {pathname} = url.parse(req.url,true)
        let filepath =  path.join(__dirname,pathname)
        try{
            let statObj = await stat(filepath)//判断是文件夹还是文件(是异步操作)
            if(statObj.isDirectory()){
                // console.log("是一个目录")
                // 如果是目录，需要把目录下面的文件读出来，渲染到模板上
              let dirs = await readdir(filepath)//是异步操作，返回promise
              //  console.log(dirs)//得到目录下所有文件名组成的数组-->也是数据
              //根据得到数据由模板渲染出一个网页 
              let templateS = ejs.render(this.template,{dirs})  
              res.end(templateS) 
            }else{
                console.log("是一个文件")
                // 如果是文件，将文件内容返回
                this.sendFile(filepath,req,res,statObj)
            }
        }catch(e){
           this.sendError(e,req,res)
        } 
    }
    // 将文件读出来返回，通过流的概念
    sendFile(filepath,req,res,statObj){
        // 在响应数据之前，设置一个头
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
