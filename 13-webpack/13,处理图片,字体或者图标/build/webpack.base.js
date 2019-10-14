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
              ]
            },
             {
               test:/\.scss$/,
               use:[
                 "style-loader",
                 "css-loader",
                 "sass-loader"
                ]
             },
            //  处理字体或者图标
             {
              test:/\.(ttf|svg|woff|eot)$/,
              use:[
                "file-loader"
               ]
            },
            // 处理图片
             {
              test:/\.(png|jpg|jpeg|gif)$/,
              use:{
                //默认功能是copy的作用，如果图片较小会将其转成base64
                // 本质上来讲就是将图片转成base64字符串，可以避免2次请求
                // "file-loader"，配置它时use是数组
                loader:"url-loader",
                options:{
                  name:"image/[name].[hash:7].[ext]",//将图片名字改为hash值，避免重名
                  // 默认情况就会将其转成base64的形式，低于100kb就会转成base64形式
                  limit:1024*25//如果低于25kb就会转成base64形式，否则转成打包之后的图片名字
                }
              }
            },
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
         !isDev && new MiniCssExtractPlugin({
            filename:"css/main.css"
          })
        ].filter(Boolean)  
    }
    if(isDev){
      return merge(base,dev)
    }else{
       return merge(base,prod)
    }



}