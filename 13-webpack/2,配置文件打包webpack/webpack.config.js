const path = require("path")
// C:\Users\kanghuanying\Desktop\mywebpack\src\index.js
// console.log(path.resolve(__dirname,"./src/index.js")),

// 默认需要导出一个配置对象
module.exports = {
    // 模式
    mode:"development",//开发模式
    // 入口  一定要是绝对路径
    entry:path.resolve(__dirname,"./src/index.js"),
    // 出口
    output:{
        filename:"bundle.js",//默认为main.js
        path:path.resolve(__dirname,"./dist")
    }




}






