// ----------------------利用generator+co解决异步
// 读取文件需要用到promises
// let fs = require("fs").promises
// function* read(){
//   let c = yield fs.readFile("./name.txt","utf8")
//   return yield fs.readFile(c,"utf8")
// }
// let co = require("co")
// co(read).then(data=>console.log(data))//1222

//-----------------------async+await处理异步
// async+await是generator的语法糖
// let fs = require("fs").promises
// async function read(){
//    let c = await fs.readFile("./name.txt","utf8")
//    return await fs.readFile(c,"utf8")
// }
// read().then(data=>console.log(data))

// -------------------------async+await解决的异步更像是同步代码
// let fs = require("fs").promises
// async function read(){
//     // await代表着它会等待异步读取文件完成之后再向下进行操作
//     // 而异步代码的话将会跳过就不再管理
//    let c = await fs.readFile("./name.txt","utf8")
//    return await fs.readFile(c,"utf8")
// }
// read().then(data=>console.log(data))//1222会立即得到结果

// -------------------------------------await后面跟上promise
// let fs = require("fs").promises
// async function read() {
    // await后面跟上promise,如果await后面跟上普通值的话，会被包装成promise
    // let c = await fs.readFile("./name.txt","utf8")
    // return c

    
    // 普通值
    // let c = "hello"
    // let c = Promise.resolve("hello")
    // return c
// }
// read().then(data => console.log(data))//age.txt


// 普通值被包装成promise
// read().then(data => console.log(data))//hello
















