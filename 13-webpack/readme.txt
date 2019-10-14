vue技术栈：vue + vue-router + vuex + es6 + webpack + vue-cli + UI库 + node
1，webpack概念
   webpack是JS应用程序的打包器，把错综复杂的项目进行打包处理，webpack可以将浏览器不能识别的高级语法转成低级语法。
   它在vue-cli中已经配置的特别好啦！
2，webpack的功能
  1）代码转换：可以将ts代码转成js代码，还有scss、less代码转为css代码
  2）文件优化：将文件进行压缩或合并
  3）代码校验：检测代码是否符合某些规范
  4）模块合并：把多个可以合并的模块合并到一起
  5）自动刷新：浏览器自动刷新，需要配置一个开发服务器devServer
  6）自动发布：在webpack中配置，使得代码在编写完之后会自动传输到发布系统
3，webpack默认遵循的规范是commonjs规范：module.export xxx  require("xxx")
   runCode走的是node代码，node遵循的是commonjs代码
   ES6规范：export default xxx   import xxx
4，webpack4.x中可以实现0配置打包，不需要一点配置文件  
   1）0配置打包：npx webpack  默认会将代码进行压缩
      使用webpack进行打包是有两种模式：开发模式和生产模式
         配置模式：npx webpack  --mode development  代码不会压缩
                  npx webpack  --mode production  代码被压缩
         每次配置太麻烦，直接在package.json中配置：
         "scripts": {
            "build":"webpack --mode production",
            "dev":"webpack --mode development",
         },      
         运行时就直接：npm run build；npm run dev
   2）存在webpack配置文件：webpack.config.js  
      配置文件遵循commonjs规范，且默认需要导出一个配置对象，以便其它地方使用。
      配置内容：
         入口：entry:path.resolve(__dirname,"./src/index.js"),  要使用绝对路径
         出口： output:{
                  filename:"bundle.js",//默认为main.js
                  path:path.resolve(__dirname,"dist")
               }
         环境：
            package.json中:
               "scripts": {
                  "build":"webpack --env.production",
                  "dev":"webpack --env.delelopment",
               },
            webpack.config.js中：
               module.exports = (env)=>{
                  //运行npm run dev得到{development: true } 
                  //运行npm run build得到{production: true }
                  console.log(env)
               } 
            所以在配置文件中得到的env环境是通过package.json得到的   
         配置文件分离:
         webpack.base.js(存放公共配置)
         webpack.prod.js(生产模式的配置)
         webpack.dev.js (开发模式的配置) 
         开发环境：
            1，webpack-dev-server：前端开发服务器，它会将项目文件打包到内存中，并不会在硬盘上产生真实的物理文件；并且会托管项目中所有文件 
                  package.json中：
                     "scripts": {
                        "build": "webpack --env.production --config ./build/webpack.base.js",//生产环境  产生真实文件
                        "dev:build": "webpack --env.development --config ./build/webpack.base.js",//开发环境 产生真实文件
                        "dev": "webpack-dev-server --env.development --config ./build/webpack.base.js",//开发环境  保存到内存中
                     }
                  webpack.dev.js中：
                     devServer:{
                        port:3000,//配置服务器端口
                        compress:true,//gzip压缩提高速度
                        // 需要存在dist文件夹
                        contentBase:path.resolve(__dirname,"../dist")//webpack最终托管文件在dist文件夹下
                     } 
            2，html-webpack-plugin:根据html文件生成模板，模板名字默认与html文件名一致，也可配置其文件名；另外它会自动引入js文件     
            3，clean-webpack-plugin:打包时会清除无用的模块
            4，默认情况下webpack是无法处理css文件的 
               css-loader  style-loader:css-loader会解析css请求，style-loader会将解析后的css内容插到style标签中渲染到页面 
               配置方法：
                  方法一：
                     {test:/\.css$/,use:"style-loader"},
                     {test:/\.css$/,use:"css-loader"}//这样会使从下往上进行解析
                  方法二：
                     {test:/\.css$/,use:["style-loader","css-loader"]},
               .scss  node-sass  sass-loader
               .less  less  less-loader
               .stylus  stylus stylus-loader  
            5，如果在一个css文件中使用@import，通过css-loader不认识import，需要进行loader配置项配置
            6，在css3中有些属性，需要加上前缀，目的就是使用浏览器时会兼容    
               1）postcss-loader:处理浏览器兼容，给属性加上前缀，比如：transform：rotate(45deg)
               2）使用postcss-loader还要配置文件postcss.config.js
               3）配置文件中还要一个自动补前缀的插件：autoprefixer 
               4）给浏览器加上前缀还要再有个配置文件.browserslistrc
            7，mini-css-extract-plugin：将css样式打包成一个css文件，将内部样式变成外部样式，还有巧妙的利用Boolean函数得到真实值    
            8，optimize-css-assets-webpack-plugin 将打包好的css文件在生产模式下时进行压缩
               配置内容：
                  引入两个插件：optimize-css-assets-webpack-plugin和terser-webpack-plugin
                  optimization:{
                     // 将css文件进行压缩  
                     minimizer:[
                        // 配置各种压缩方案
                        new OptimizeCssAssetsWebpackPlugin(),//使用插件将css压缩，会导致原本的压缩文件不再被压缩
                        new TerserWebpackPlugin()//手动压缩原本可压缩的js文件
                     ]
                  }
            9，处理图片img
               1）现在js文件中生成一个img标签，将其塞到html文档中。
               2）webpack不认识图片，需要loader处理：file-loader
               3）将图片转成base64字符串，避免2次请求，同时它也可打包图片：url-loader
            10，处理高级css语法，将高级语法转成低级语法 babel-loader(@babel/core  @babel/preset-env)


         
         默认情况下webpack的配置文件叫webpack.config.js，它会被自动解析；
         当配置文件分离时，可以通过--config在package.js中指定webpack的配置文件名   
         文件合并：
         当配置文件分离配置时，针对不同的环境需要将对应文件与基础文件进行合并。
         webpack-merge  需要将合并后的文件返回，否则仍会走默认文件webpack.config.js











