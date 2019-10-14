const path = require("path")
const merge = require("webpack-merge")
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
          }
    }
    if(isDev){
      return merge(base,dev)
    }else{
       return merge(base,prod)
    }



}