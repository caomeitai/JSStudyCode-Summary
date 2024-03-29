"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _zlib = _interopRequireDefault(require("zlib"));

var _crypto = _interopRequireDefault(require("crypto"));

var _mime = _interopRequireDefault(require("mime"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ejs = _interopRequireDefault(require("ejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let {
  readdir,
  stat
} = _fs.default.promises;

let template = _fs.default.readFileSync(_path.default.resolve(__dirname, "../template.html"), "utf-8");

class Server {
  constructor(config) {
    this.port = config.port;
    this.template = template;
  } // 判断是目录还是文件


  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true);

    pathname = decodeURIComponent(pathname);

    let filepath = _path.default.join(process.cwd(), pathname);

    try {
      let statObj = await stat(filepath);

      if (statObj.isDirectory()) {
        let dirs = await readdir(filepath);

        let templateS = _ejs.default.render(this.template, {
          dirs,
          path: pathname === "/" ? "" : pathname
        });

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(templateS);
      } else {
        this.sendFile(filepath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  } // 压缩


  gzip(filepath, req, res, statObj) {
    let encoding = req.headers["accept-encoding"];

    if (encoding) {
      res.setHeader("Content-Encoding", "gzip");

      if (encoding.match(/gzip/)) {
        return _zlib.default.createGzip();
      } else if (encoding.match(/deflate/)) {
        res.setHeader("Content-Encoding", "deflate");
        return _zlib.default.createDeflate();
      }

      return false;
    }

    return false;
  } // 缓存


  cache(filepath, req, res, statObj) {
    let Lastmodified = statObj.ctime.toGMTString();
    res.setHeader("Last-Modified", Lastmodified);
    let ifmodifiedsince = req.headers['if-modified-since']; // if(ifmodifiedsince){
    //   if(ifmodifiedsince!==Lastmodified){
    //      return false
    //   }
    // }
    // return true
    // 将文件通过哈希算法摘要出来之后转成base64的形式

    let Etag = _crypto.default.createHash("md5").update(_fs.default.readFileSync(filepath)).digest('base64'); // console.log(Etag)// jrazqsmaHr9O8BbzZiSpig==


    res.setHeader("Etag", Etag); //将访问的文件经过摘要得到的东西设置成一个响应头
    // console.log(req.headers['if-none-match'],"match")//jrazqsmaHr9O8BbzZiSpig==

    let ifnonematch = req.headers['if-none-match']; // 将对比缓存与摘要缓存结合到一起---->不太完善
    // if(ifnonematch && ifmodifiedsince){
    //   if(ifnonematch!==Etag && ifmodifiedsince!==Lastmodified){
    //     return false
    //   }else{
    //     return true
    //   }
    // }

    if (ifnonematch && ifmodifiedsince) {
      if (ifnonematch !== Etag && ifmodifiedsince !== Lastmodified) {
        return false; //内容变了且时间变了，肯定走网络
      }
    } else {
        return false; //内容变了，时间没变或者时间变了，内容未改；也是要求走网络
      }

    return true; //真正的未修改内容
    // 根据摘要判断是否缓存
    // if(ifnonematch){//此时是文件虽然修改了，但是内容没有改变
    //   // 此时文件被修改，且内容发生改变，走网络，不走缓存
    //   if(ifnonematch!==Etag){
    //     return false//走网络
    //   }else{
    //     // 修改了，但内容没变,那就走缓存
    //     return true
    //   }
    // }else{
    //   return true
    // }
    // // 根据修改的时间来判断是否缓存
    // if(ifmodifiedsince){
    //   if(ifmodifiedsince!==Lastmodified){
    //      return false
    //   }
    // }
    // return true
  } // 响应文件


  sendFile(filepath, req, res, statObj) {
    res.setHeader("Cache-control", "no-cache");
    let cache = this.cache(filepath, req, res, statObj);

    if (cache) {
      res.statusCode = 304;
      return res.end();
    }

    let flag = this.gzip(filepath, req, res, statObj);
    let type = _mime.default.getType(filepath) || "text/plain"; //判断文件类型，注意纯文本形式

    res.setHeader("Content-Type", type + ";charset=utf-8");

    if (!flag) {
      _fs.default.createReadStream(filepath).pipe(res);
    } else {
      _fs.default.createReadStream(filepath).pipe(flag).pipe(res);
    }
  } // 找不到文件


  sendError(e, req, res) {
    res.statusCode = 404;
    res.end("NOT Found");
  } // 创建服务器


  start() {
    let server = _http.default.createServer(this.handleRequest.bind(this));

    server.listen(this.port, () => {
      console.log(`
${_chalk.default.yellow(`Starting up http-server, serving `)}${_chalk.default.blue(`./`)}
${_chalk.default.yellow(`Available on:`)}
    ${_chalk.default.green(`http://127.0.0.1:${this.port}`)}
    ${_chalk.default.green(`http://192.168.1.115:${this.port}`)}
Hit CTRL-C to stop the server
        `);
    });
  }

}

var _default = Server;
exports.default = _default;