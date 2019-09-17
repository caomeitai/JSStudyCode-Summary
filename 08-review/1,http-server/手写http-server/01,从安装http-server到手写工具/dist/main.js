"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.option('-p,--port<val>', 'set http-server port').parse(process.argv);

let config = {
  port: 8080
};
Object.assign(config, _commander.default); //将program整合到config上
// 开启一个服务

let server = new _server.default(config);
server.start();