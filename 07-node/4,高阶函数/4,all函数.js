// 1，通过两部分分别读取文件中内容
// const fs = require("fs")
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     console.log(data)
// })
// fs.readFile("./age.txt","utf8",(err,data)=>{
//     console.log(data)
// })

// const fs = require("fs")
// let content = {}  //里面用来存放每个文件中的内容 
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     // console.log(data)  //tanni阿爸
//     content['name'] = data  
// })
// fs.readFile("./age.txt","utf8",(err,data)=>{
//     // console.log(data) //24
//     content['age'] = data
// })

// // 原因是读取文件时异步操作，不可能立马得到结果，那么content中就拿不到结果啦
// console.log(content)  //{}


// 因为读文件是异步的，那么需要在其内部打印才可得到数值
// const fs = require("fs")
// let content = {} 
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     content['name'] = data
//     console.log(content)  //{ age: '24' }
// })
// fs.readFile("./age.txt","utf8",(err,data)=>{
//     content['age'] = data
//     console.log(content)  //{ age: '24', name: 'tanni阿爸' }
// })


// 为解决刚刚异步问题，可自定义一个函数，当满足条件时调用
// const fs = require("fs")
// let content = {}; 
// let index = 0;
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     content['name'] = data
//     index++;
//     out()
// })
// fs.readFile("./age.txt","utf8",(err,data)=>{
//     content['age'] = data
//     index++;
//     out()
// })
// function out(){
//     // 每执行一次读文件操作就index++,当其为2时，那么就代表两次执行完毕，内容都存放到对象中，将其打印出来
//     if(index==2){
//         console.log(content)
//     }
// }


// 最后引入after函数来解决刚刚的问题，
// 构建一个after函数，当调用满足条件时，执行后面的函数
const fs = require("fs")
let content = {}; 
let after = (times,fn)=>{
    return ()=>{
        if(--times===0){
          fn()
        } 
    }
}
const newafter = after(2,()=>{
    console.log(content)
})
fs.readFile("./name.txt","utf8",(err,data)=>{
    content['name'] = data;
    newafter()
})
fs.readFile("./age.txt","utf8",(err,data)=>{
    content['age'] = data
    newafter()
})


