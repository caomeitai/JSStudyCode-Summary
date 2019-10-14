const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")

module.exports = (env)=>{
    const isDev =  env.development;
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",//默认为main.js
            path:path.resolve(__dirname,"../dist")
          },
        plugins:[
          new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html"),
            filename:"main.html",
            minify:!isDev&&{
              removeAttributeQuotes:true,
              collapseWhitespace:true,
            }
          }),
          // 清除没有用到的模块
		  //原本在dist文件夹下还存在几个js文件，打包之后就被清除啦
          new CleanWebpackPlugin()
        ]  
    }
    if(isDev){
      return merge(base,dev)
    }else{
       return merge(base,prod)
    }



}