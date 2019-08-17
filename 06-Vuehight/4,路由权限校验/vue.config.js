// 脚手架是基于webpack的配置的
// vue-cli配置文件名字：vue.config.js它是位于src同级目录下面的，它不可改变名字

//vue.config.js在配置时需要导出文件，大部分情况下配置的是webpack相关代码，而webpack是基于node的，如下require

// 模块化： 任何一个文件都是一个模块，写了一个模块，需要把这个模块导出去，别人需要把这个模块导进来 
// 导出导入方案一： node（commonjs方案） 导入：let http = require("http") 导出：module.exports = {} ; 
// 导出导入方案二： vue react(es6方案)     导入：import http from "http"    导出：export default {}
module.exports={
    // 来判断是开发环境还是生产环境,利用三元表达式，
    publicPath:process.env.NODE_ENV==='production' ? 'http://www.jintaiheng.com':"/",
    assetsDir:"asserts",
    // 一般使用外部模板，不会使用内部模板
    runtimeCompiler:false,
    productionSourceMap:false,
    // chainWebpack:config=>{
    //     // 可以获取到webpack的配置 在增加一些自己的逻辑
    //     // 配置目录别名 别名叫+
    //     config.resolve.alias.set('_c',path.resolve(__dirname,'src/components'));
    //     config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'));
    // },
    // configureWebpack:{
    //     pligins:[],
    //     module:{}
    // },
    devServer:{//本地开发服务器，上线就不需要啦
        proxy:{
            // 可以解决跨域问题
            "/api/getuser":{
                // 当访问这个接口时目标是target
                target:"http://localhost:3000",
                pathRewrite:{//重写，将api去掉
                    '^/api':''
                }

            }
        }

    }
}
