const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 引入生产环境和开发环境的webpack配置文件
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")

// 这是公共的配置文件
module.exports = (env)=>{
    const isDev =  env.development;
    // 公共配置信息
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",//默认为main.js
            path:path.resolve(__dirname,"../dist")
          },
        plugins:[
          new HtmlWebpackPlugin({
            // 根据文件生成模板
            template:path.resolve(__dirname,"../public/index.html"),
            filename:"main.html",
            // 表示只在生产模式下有用
            minify:!isDev&&{
              removeAttributeQuotes:true,//去掉属性的双引号
              collapseWhitespace:true,//去除文本换行符
            }
          })
        ]  
    }
    if(isDev){
      return merge(base,dev)
    }else{
       return merge(base,prod)
    }



}