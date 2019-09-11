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
  readFile,
  writeFle,
  readdir,
  stat
} = _fs.default.promises;

class Server {
  constructor(config) {
    this.port = config.port;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true); //   得到文件的绝对路径


    let filepath = _path.default.join(__dirname, pathname); //得到绝对路径


    try {
      let statObj = await stat(filepath); //通过stat来判断是文件还是文件夹

      if (statObj.isDirectory()) {
        console.log("是一个目录");
      } else {
        console.log("是一个文件");
      }
    } catch (e) {
      this.sendError(e, req, res); //路径不存在
    }
  }

  sendError(e, req, res) {
    console.log(e);
    res.statusCode = 404;
    res.end("Not Found");
  } // 服务开启的同时，创建一台服务器


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