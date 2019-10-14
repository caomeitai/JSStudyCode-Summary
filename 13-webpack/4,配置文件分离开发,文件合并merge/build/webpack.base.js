const path = require("path")
const merge = require("webpack-merge")
// 引入生产环境和开发环境的webpack配置文件
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")

// 这是公共的配置文件
module.exports = (env)=>{
    // console.log("base....")

    // C:\Users\kanghuanying\Desktop\mywebpack\dist
    // console.log(path.resolve(__dirname,"../dist"))

    // console.log(env)//这里的env来自于package.json中的配置
    const isDev =  env.development;
    // 公共配置信息
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",//默认为main.js
            path:path.resolve(__dirname,"../dist")
          }
    }
    if(isDev){
        // 开发模式  将开发文件与基础文件合并并返回
      return   merge(base,dev)
    }else{
        // 生产模式  将生产文件与基础文件合并并返回
       return merge(base,prod)
    }



}