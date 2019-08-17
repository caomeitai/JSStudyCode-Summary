const path = require("path")//相当于之前的import path from "path"
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports 导出来一个模块  相当于 export default
module.exports = {
    entry: "./src/index.js",//表示要打包哪个文件，是文件的入口
    output: {
        path: path.resolve(__dirname, "dist"), //使用的是绝对路径
        filename: 'bundle.js',  //最终形成的文件名字
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Hello webpack~",
            filename:"index.html",
            template:"./dist/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
        ]
    },
    
    devServer:{
        port:8080,
        hot:true
    }
}