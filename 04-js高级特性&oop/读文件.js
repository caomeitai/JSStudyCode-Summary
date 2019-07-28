import { rejects } from "assert";

// 之前普通写法利用的是回调函数
// let fs = require("fs")//filesystem
// // err表明读取数据失败，data则表示读取数据成功
// fs.readFile("./readfile.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// 回调函数的简写
// let fs = require("fs");
// fs.readFile("./readfile.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// 使用promise
// let p = new Promise(function(reject,resolve){
//     fs.readFile("./readfile.txt","utf-8",function(err,data){
//         if(err){
//             reject(err)
//         }
//         resolve(data);

//     })
// })
// p.then(function(res){
//     console.log(res)
// },function(err){
//     console.log(err)
// })
// console.log(p)

// 箭头函数，加promise函数
// let p = new Promise((resolve,reject)=>{
//     fs.readFile("./readfile.txt","utf-8",(err,data)=>{
//         if(err){
//             resolve(err);
//         }
//         reject(data);
//     })
//     p.then((res)=>{
//         console.log(res);
//     },(err)=>{
//         console.log(err)
//     })
//     console.log(p);
// })

// 将调用的内容封装成一个函数
// 封装成读取文件的函数 readFile
// function readFile(filename){
//     // 封装成函数的返回值应该是新new的那个Promise函数
//     return new Promise(function(reject,resolve){
//       fs.readFile(filename,"utf-8",function(err,data){
//           if(err){
//               resolve(err);
//           }
//           reject(data);
//       })
//     })
// }
// readFile("readfile.txt").then(function(res){console.log(res)})
// .catch(function(err){console.log(err)})


function readFile(filename){
    return new Promise(function(reject,resolve){
        fs.readFile(filename,"utf-8",function(err,data){
            if(err){
                reject(err)
            }
            resolve(data);
        })
    })
}
readFile("redafile").then(function(res){
    console.log(res)
}).catch(function(err){err})

















