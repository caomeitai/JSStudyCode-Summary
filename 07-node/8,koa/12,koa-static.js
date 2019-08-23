// koa-static
const Koa = require("koa")
const server = require("koa-static")
const app = new  Koa()

// 这里是拼接而非使用绝对路径   path.join
app.use(server(__dirname+"/public"))

app.listen(3000)