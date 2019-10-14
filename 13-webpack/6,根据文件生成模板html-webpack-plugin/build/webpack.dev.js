const path = require("path")
module.exports = {
    mode:"development",
    // 开发环境服务器
    devServer:{
        port:3000,//配置服务器端口
        compress:true,//gzip压缩提高速度
        // 需要存在dist文件夹
        contentBase:path.resolve(__dirname,"../dist")//webpack最终托管文件在dist文件夹下
    }
}