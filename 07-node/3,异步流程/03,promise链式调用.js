// 在读取文件时尽量使用绝对路径
const fs = require("fs")
// 需要路径模块就要引入它
const path = require("path")
let filepath = path.join(__dirname,"./name.txt")
fs.readFile(filepath,"utf8",(err,data)=>{
   if(err)console.log(err)
//  若是读取第一个文件成功再次套着读第二个文件   还是用path.join来获取绝对路径，这里的data指的是age.txt
   fs.readFile(path.join(__dirname,data),"utf8",(err,data)=>{
    if(err)console.log(err)
    console.log(data)
   })
})

// 封装一个函数，函数功能是读取一个文件的内容
// let fs = require("fs")
// let path = require("path")
// let filepath = path.join(__dirname,"./name.txt")
// let filepath1 = path.join(__dirname,"./name1.txt")
// // 函数形参可不写，直接使用rest来传递参数  ...args
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         // 在promise中来读取文件，当成功时读取resolve，否则reject
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// // 函数调用时使用.then来获取结果，将上面promise的结果或原因打印出来，那么就要求函数中有promise
// // 函数调用参数，路径名和以啥样方式展示结果

// // 当读取文件路径存在时会走then的第一个函数
// // readFile(filepath,"utf8").then((data)=>{

// // 当读取文件路径错误时会走then的第二个函数
// readFile(filepath1,"utf8").then((data)=>{
// console.log(data)  //仅仅读出了age.txt
// },(err)=>{
//     console.log(err) //Error: ENOENT: no such file or directory
// })


// 使用绝对路径，将文件全部读出来了，不过又回到了回调地狱
// let fs = require("fs")
// let path = require("path")
// let filepath = path.join(__dirname,"./name.txt")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile(filepath,"utf8").then((data)=>{
// // console.log(data)  //得到age.txt
//     readFile(path.join(__dirname,data),"utf8").then((data)=>{
//        console.log(data)
//     },(err)=>{
//        console.log(err)
//     })
// },(err)=>{
//     console.log(err)
// })


// 解决上述回调地狱的方法  promise的链式调用 .then之后再次.then
// let fs = require("fs")
// let path = require("path")
// let filepath = path.join(__dirname,"./name.txt")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile(filepath,"utf8").then((data)=>{
//  // console.log(data)  //得到age.txt 
//   return false  
// },(err)=>{
//     console.log(err)
// }).then((data)=>{
//     console.log(data)  //得到false
// },(err)=>{
//     // console.log(err)
// })


// let fs = require("fs")
// let path = require("path")
// // let filepath = path.join(__dirname,"./name.txt")
// let filepath1 = path.join(__dirname,"./name1.txt")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// // readFile(filepath,"utf8").then((data)=>{
// readFile(filepath1,"utf8").then((data)=>{
// //  console.log(data)  //此时传递到下面，data返回值未定义是undefined
//  return data  //将data作为参数返回给下一个.then的参数  当执行完return后将不再执行下面操作
// //  throw new Error("不OK")
// },(err)=>{
//    return err
// }).then((data)=>{
//     console.log(data)
// },(err)=>{
//     // 当读取name1文件时，得到失败原因
//     console.log(err)  //Error: ENOENT: no such file or directory
// })


// 当封装函数调用时返回的是promise，那么这个promise会被执行，并且接下来的then就是继承的这个promise的状态
// let fs = require("fs")
// let path = require("path")
// let filepath = path.join(__dirname,"./name.txt")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile(filepath,"utf8").then((data)=>{
// //  console.log(data)  
//  return data 
// },(err)=>{
//    return err
// }).then((data)=>{
//     // console.log(data)
//     return new Promise((resolve,reject)=>{
//         reject("不OK")
//     })
// },(err)=>{console.log(err)}).then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

// 利用promise链式调用来完成读取文件
// let fs = require("fs")
// let path = require("path")
// let filepath = path.join(__dirname,"./name.txt")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile(filepath,"utf8").then((data)=>{
// //  return data   //得到age.txt
// // 不应该return  data 而应该return一个再次读取文件的函数redFile，而readFile本身就是一个promise
//  return readFile(path.join(__dirname,data),"utf8")
// },(err)=>{
//    return err
// }).then((data)=>{
//     // 此时的.then继承的是上面读取文件的readFile的promise
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })









