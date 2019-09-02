// 模块化，在model中仅仅是创建模块，使用时全部需要引入
let Usermodel = require("./model/模块2/user")
let Managermodel = require("./model/模块2/manager")

let user =new Usermodel({
    name:"wangcai",
    score:123,
})

let manager =new Managermodel({
    name:"wangcai",
    score:123,
})

user.save(err=>{
    if(err) return
    console.log("保存用户ok")
})

manager.save(err=>{
    if(err) return
    console.log("保存管理员ok")
})
 