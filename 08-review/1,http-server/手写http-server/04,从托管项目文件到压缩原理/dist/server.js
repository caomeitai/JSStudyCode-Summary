"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

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
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true); // 当路径名为中文时，浏览器会自动编码，而解码需要手动操作


    pathname = decodeURIComponent(pathname); // let filepath =  path.join(__dirname,pathname)
    // console.log(filepath)// C:\Users\kanghuanying\Desktop\httpServer\dist\---)获得绝对路径
    // console.log(process.cwd())// C:\Users\kanghuanying\Desktop\httpServer--->获得当前工作目录
    // 渲染（托管）当前工作目录文件夹而非dist文件夹

    let filepath = _path.default.join(process.cwd(), pathname);

    try {
      let statObj = await stat(filepath);

      if (statObj.isDirectory()) {
        let dirs = await readdir(filepath); // 需要判断访问路径是根目录，还是啥

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
  }

  sendFile(filepath, req, res, statObj) {
    res.setHeader("Content-Type", _mime.default.getType(filepath) + ";charset=utf-8");

    _fs.default.createReadStream(filepath).pipe(res);
  }

  sendError(e, req, res) {
    res.statusCode = 404;
    res.end("NOT Found");
  }

  start() {
    let server = _http.default.createServer(this.handleRequest.bind(this)); //这里的handle如果加上小括号就在创建服务器时自动调用了      let server = http.cr


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