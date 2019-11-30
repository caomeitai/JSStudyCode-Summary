// 读取文件是异步操作
// let fs = require("fs")
// 读取文件是要遵循错误优先
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     console.log(data)//age.txt
//     fs.readFile(data,"utf8",(err,data)=>{
//         console.log(data)//123456
//     })
// })


// ------------------------------利用Promise解决异步
// let fs = require("fs")
// // 封装读取文件的promise函数
// function read(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf8", (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
// })
// }

// then的链式调用
// 1，then方法中会返回一个Promise,这个promise会自动执行，会采用该promise的状态
// 如果返回成功态会将成功的结果向外层的下一个then传递，它会作为下一个then成功态的参数值
// 2，读取文件内容本身就是promise可以.then，然后其函数返回值再次.then证明返回值也是promise函数
// read("./name.txt")
// .then(
//     (data) => { return read(data) }, 
//     (err) => {console.log(err)}
// ).then(data=>{console.log(data)},err=>{console.log(err)})


// let fs = require("fs").promises
// async function read() {
//     let c = await fs.readFile("./name.txt", "utf8")
//     return await fs.readFile(c, "utf8")
// }
// read().then(data => console.log(data))


