// const fs = require("fs")
// const path = require("path")
// // 可读流  并不会去读取文件   fs.createReadStream(path[, options])
// let rs = fs.createReadStream(path.join(__dirname,"./name.txt"),{//这里面配置的都是可选项
//     flags:"r", // r read 
//     highWaterMark:5, // 4*1012  4kb   4kb = 4*1024字节
//     encoding:null,
//     autoClose:true, // 读取完后，需要关毕
//     start:0,
//     end:10
// })
// let arr = [];
// rs.on("data",function(chunk){
//     arr.push(chunk)
// })
// rs.on("end",function(){
//     // console.log(arr)
//    console.log(Buffer.concat(arr).toString()) //直接将Buffer连成一个，再将Buffer转成字符串，默认是utf8的形式
// })





const fs = require("fs")
const path = require("path")
// 在可读流事件中除了data和end事件以外，还有暂停事件pause
let rs = fs.createReadStream(path.join(__dirname,"name.txt"),{//这里面配置的都是可选项
    flags:"r", // r read 
    highWaterMark:5, // 4*1012  4kb   4kb = 4*1024字节
    encoding:null,
    autoClose:true, // 读取完后，需要关毕
    start:0,
    end:10
})
let arr = [];
rs.on("data",function(chunk){
    arr.push(chunk)
    rs.pause()  //将data事件暂停  这里是只要接一滴水就立马暂停啦
})
// end事件是在读取数据完毕之后触发执行的，那么在事件暂停后也就不会触发它啦
rs.on("end",function(){
   console.log(Buffer.concat(arr).toString()) //直接将Buffer连成一个，再将Buffer转成字符串，默认是utf8的形式
})

// 恢复data事件中的暂停事件
setTimeout(()=>{
    console.log("desfcdfv")
    rs.resume()
},5000)  