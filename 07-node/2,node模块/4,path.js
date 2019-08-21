// path属于内置模块，使用就要引入

const path = require('path')
// path模块的方法：basename  extname  dirname  join  resolve

// 1，path.basename()返回的是path的最后一部分  拿到文件前面的文件名
// let r =  path.basename("taani.js","js")
// let r =  path.basename("taani.js")
// console.log(r)

//2，path.extname得到的是文件的拓展名，从最后一次出现.字符到path最后一部分字符串结束
// let r =  path.extname("taani.js","js")
// let r =  path.extname("taani.js")
// console.log(r)

// 3，path.dirname()  返回path的目录名  而其尾部的目录分隔符 / 会被忽略
// let r =  path.dirname("/a/s/d/d/f")
// let r =  path.dirname("a/s/d/d/f")
// console.log(r)

// 4，path.join()会将所有给定的path拼接到一起，然后规范生成的路径
// let r =  path.join("/a/s/d/d/f","/a/sd/f/ggnh/")
// let r =  path.join(__dirname,"/a/sd/f/h/")

// let r =  path.join(__dirname,"a/sd/f/h/")
// console.log(r)

// 5， path.resolve()将路径或路径片段的序列解析为绝对路径。如果没有传入 path 片段，则返回当前工作目录的绝对路径。
// let r =  path.resolve("")  //得到当前工作目录的绝对路径。
// let r =  path.resolve("/d/d/f/h/j/")   //c:\d\d\f\h\j
// console.log(r)

// let r =  path.resolve("d/d/f/h/j/")  //它效果与上面join一样将两个路径拼到一起
// console.log(r)


// 写代码读取out.txt使用path模块
let fs = require('fs')
let path = require('path')
// c:\北京学习\JSStudyCode-Summary\07-node\out.txt
let s = path.join(__dirname,"out.txt") //得到要读取文件的绝对路径
// console.log(s)
// 读取文件时第一个参数是文件的路径，然后回调函数解决异步
fs.readFile(s,(err,data)=>{
  if(err) return 
  console.log(data)
})
