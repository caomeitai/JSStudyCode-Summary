const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")

module.exports = (env)=>{
    const isDev =  env.development;
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        },
        module:{
          rules:[
            {
              test:/\.css$/,
              use:[
                isDev ? "style-loader":MiniCssExtractPlugin.loader,
                {
                  loader:"css-loader",
                  options:{
                    importLoaders:2
                  }
                },
                "postcss-loader",
                "sass-loader"
              ]},
             {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
          ]

        },
        plugins:[
          new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html"),
            filename:"index.html",
            minify:!isDev&&{
              removeAttributeQuotes:true,
              collapseWhitespace:true,
            }
          }),
          new CleanWebpackPlugin(),
          // 将css样式另外打包成一个css文件，转成外部样式
          !isDev && new MiniCssExtractPlugin({
            filename:"css/main.css"

          })
        ].filter(Boolean)  //利用Boolean来筛选出真实数值  
    }
    if(isDev){
      return merge(base,dev)
    }else{
       return merge(base,prod)
    }



}