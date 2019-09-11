// gzip压缩格式
let zlib = require("zlib")
let fs = require("fs")

// 先将文件读取再进行压缩---->对于同步读取文件，返回值就是数据，而异步读的话是回到返回数据
// let file = fs.readFileSync("./a.txt")
// // 将数据进行压缩
// zlib.gzip(file,function(err,data){
//     //console.log(data)
//     fs.writeFileSync("a.gz",data)
// })

// 创建的可读流可控制速率，它的原理就是转化流
fs.createReadStream("./a.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("a.txt.gz"))