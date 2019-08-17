// npm i express插件，express用来写接口，需要引进来使用require
let express = require("express")
// 这里就表示在当地地址  localhost：6000/getuser这个接口有数据
// 创建应用
let app = express()

// 在后端配置，让所有的人都可以访问我的api接口
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
// 当访问localhost:3000/role接口时给客户端返回menulist，操作如下
app.get("/role",(req,res)=>{
    // 相应一些内容
    res.json({
        menuList:[
            { pid: -1, path: '/cart', name: '购物车', id: 1, auth: 'cart' },
            { pid: 1, path: '/cart/cart-list', name: '购物车列表', id: 4, auth: 'cart-list' },
            { pid: 4, path: '/cart/cart-list/lottery', auth: 'lottery', id: 5, name: '彩票' },
            { pid: 4, path: '/cart/cart-list/product', auth: 'product', id: 6, name: '商品' },
            { pid: -1, path: '/shop', name: '商店', id: 2, auth: 'shop' },
            // { pid: -1, path: '/profile', name: '个人中心', id: 3, auth: 'profile' },
            { pid: -1, path: '/hello', name: 'Hello', id: 7, auth: 'hello' },
        ],
        buttonAuth:{
            edit:true,
        }
    })

})

// 监听端口
app.listen(3000)