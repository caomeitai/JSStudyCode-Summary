import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
import zlib from "zlib"
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
         pathname = decodeURIComponent(pathname)
        let filepath =  path.join(process.cwd(),pathname)
        try{
            let statObj = await stat(filepath)
            if(statObj.isDirectory()){
              let dirs = await readdir(filepath)
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
    // 在返回之前对文件进行压缩，压不压缩通过请求头Accept-Encoding来判断
    gzip(filepath,req,res,statObj){
      //console.log(req.headers)//'accept-encoding': 'gzip, deflate, br'
      let encoding = req.headers["accept-encoding"] 
      // 存在有关压缩的请求头accept-encoding
      if(encoding){
        res.setHeader("Content-Encoding","gzip")
        if(encoding.match(/gzip/)){//正则
          return  zlib.createGzip()//创建了个转化流
        }else if(encoding.match(/deflate/)){
         res.setHeader("Content-Encoding","deflate")
         return  zlib.createDeflate()
        }
        return false
      }
      return false
    }
    // 判断是否存在缓存
    cache(filepath,req,res,statObj){
      // console.log(statObj.ctime)//2019-09-11T08:47:01.362Z---->和现实中差8小时
      // console.log(statObj.ctime.toGMTString())//Wed, 11 Sep 2019 08:47:01 GMT
      let Lastmodified = statObj.ctime.toGMTString()//最后修改时间
      // console.log("Lastmodified", Lastmodified)//Wed, 11 Sep 2019 09:28:24 GMT
      res.setHeader("Last-Modified",statObj.ctime.toGMTString())
      let ifmodifiedsince = req.headers['if-modified-since']//上一次修改时间
      // console.log('ifmodifiedsince', ifmodifiedsince) //Wed, 11 Sep 2019 08:47:01 GMT

      if(ifmodifiedsince){
        if(ifmodifiedsince!==Lastmodified){//修改文件，不走缓存
           return false
        }
      }
      return true

    }
      
    sendFile(filepath,req,res,statObj){
      // 设置响应头，在10秒之内不要再访问我
      // res.setHeader("Cache-control","max-age=10")
      // res.setHeader("Expires",new Date(Date.now()+1000*20).toGMTString())
      
      // res.setHeader("Cache-control","no-cache")//还去走网络，但已有缓存
      // res.setHeader("Cache-control","no-store")//还去请求服务器，但不缓存
      
      // 时间较长，一直从缓存中拿取数据，即成为了强制缓存
      // res.setHeader("Cache-control","max-age=1000000000000000000000000")
      res.setHeader("Cache-control","no-cache")

      let cache = this.cache(filepath,req,res,statObj)
      if(cache){
        // 存在缓存，那么直接找缓存中的内存--->设置状态码后就结束程序
        res.statusCode = 304
        return res.end()
      }

      // 响应数据之前，把数据压缩一下
     let flag = this.gzip(filepath,req,res,statObj)
      res.setHeader("Content-Type",mime.getType(filepath)+";charset=utf-8")
      if(!flag){
        //客户端不支持压缩或者服务端处理不了客户端支持的压缩格式 
        fs.createReadStream(filepath).pipe(res) //不支持那就不处理
      }else{
        fs.createReadStream(filepath).pipe(flag).pipe(res)//经过转化流 
      }
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
