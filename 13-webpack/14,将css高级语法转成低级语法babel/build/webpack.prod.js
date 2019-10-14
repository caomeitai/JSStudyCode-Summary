const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
module.exports = {
    mode:"production",
    optimization:{
        // 将css文件进行压缩  
        minimizer:[
          // 配置各种压缩方案
          new OptimizeCssAssetsWebpackPlugin(),//使用插件将css压缩，会导致原本的压缩文件不再被压缩
          new TerserWebpackPlugin()//手动压缩原本可压缩的js文件
        ]
    }
}