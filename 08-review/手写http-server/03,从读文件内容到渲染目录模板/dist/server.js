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

// 读出来模板
let template = _fs.default.readFileSync(_path.default.resolve(__dirname, "../template.html"), "utf-8"); // console.log(template)//ok


class Server {
  constructor(config) {
    this.port = config.port; //将template属性挂在实例上，可以保证属性通过this来获取，不被参数覆盖掉

    this.template = template;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true);

    let filepath = _path.default.join(__dirname, pathname);

    try {
      let statObj = await stat(filepath); //判断是文件夹还是文件(是异步操作)

      if (statObj.isDirectory()) {
        // console.log("是一个目录")
        // 如果是目录，需要把目录下面的文件读出来，渲染到模板上
        let dirs = await readdir(filepath); //是异步操作，返回promise
        //  console.log(dirs)//得到目录下所有文件名组成的数组-->也是数据
        //根据得到数据由模板渲染出一个网页 

        let templateS = _ejs.default.render(this.template, {
          dirs
        });

        res.end(templateS);
      } else {
        console.log("是一个文件"); // 如果是文件，将文件内容返回

        this.sendFile(filepath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  } // 将文件读出来返回，通过流的概念


  sendFile(filepath, req, res, statObj) {
    // 在响应数据之前，设置一个头
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