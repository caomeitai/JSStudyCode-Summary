// console.log(global)

// 引入node中的内置模块  fs:filesystem 文件系统来操作的
// const fs = require('fs')
// // readFile异步读取文件，使用回调函数解决异步  readFileSync同步读取文件
// fs.readFile("./out.txt",function(err,data){//读取内存中的数据，虽然buffer中是2进制，但在打印时是16进制数据
// //    err表示错误信息，data表示读取成功信息,遵循错误优先
//     if(err)  console.log(err)
//     console.log(data)
// })

// console.log(this)  //  global中this是 {}

// console.log(__dirname)  //不需要写global.  得到当前文件工作目录
// console.log(__filename)  //加上了当前文件名