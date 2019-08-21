// buffer是内存中的二进制数据  缓存  默认扔进去的是个字符串

// 1，Buffer.from是开辟一块内存将数据扔进去

// let b = Buffer.from(10);  //在内存开辟一块空间存放二进制数据10，它是一个字符串使用引号引起来了
// console.log(b);  //  打印出16进制<Buffer 31 30>

// node中都是utf8  在utf8中一个字占三个字节
// let b = Buffer.from("你好")
// let b = Buffer.from("你好",'utf8')
// console.log(b) //<Buffer e4 bd a0 e5 a5 bd>

// 创建buffer中可以存放数组，最后得到的是数组中的内容，它得到的是数字
// let b = Buffer.from([10,11])
// console.log(b)  //<Buffer 0a 0b>
// let b1 = Buffer.from(b)
// console.log(b1)  //<Buffer 0a 0b>
// 转成ascii   16进制 <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
// let b = Buffer.from('hello world','ascii')
// console.log(b)

// 将内容以utf8的形式1转化成字符串的形式展示出来
let b = Buffer.from('中')
console.log(b.toString())  //toString没有写东西时，默认是utf8
console.log(b.toString('utf8'))
// console.log(b.toString('hex'))//将每个字节编码成两个16进制的字符



// 2，Buffer.alloc是开辟一块内存，里面没有垃圾数据，是干净内存块
// let b = Buffer.alloc(10)//10代表着内存块的长度，有10个字节
// console.log(b)  //<Buffer 00 00 00 00 00 00 00 00 00 00>

// 3，Buffer.allocUnsafe是只管开辟一块内存，分配空间，里面有垃圾数据
// let b = Buffer.allocUnsafe(10)//10代表着内存块的长度，有10个字节
// console.log(b)  //<Buffer 00 00 00 00 00 00 00 00 00 2e>













