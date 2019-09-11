"use strict";

// console.log("ok")//日志输出
//标准输出
// process.stdout.write("ok")
// 输入一个abc，通过转化流，变成大写，输出---->它是压缩的原理
const {
  Transform
} = require("stream"); // 手写转化流，来继承原始转化流


class Mytransfrom extends Transform {
  _transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase(); //由buffer转成字符串后换大写

    this.push(chunk); //将水推到转化流中

    callback();
  }

}

let mytransfrom = new Mytransfrom(); //创建个转化流
// 通过管道将输入流到转化流中，然后经管道流到输出流中

process.stdin.pipe(mytransfrom).pipe(process.stdout); // 标准输入---->可不断输入内容
// process.stdin.on("data",function(data){
//    process.stdout.write(data)
// })