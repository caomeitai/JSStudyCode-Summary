// 操作buffer的api，是一堆的函数

// 将两个小的buffer放到大的buffer上面去  copy
// let b1 = Buffer.from("中")
// let b2 = Buffer.from("国")
// let c = Buffer.alloc(6)  //大的buffer空间足够
// b1.copy(c,0,0,3)//将其copy到c，从哪里开始0，然后是小buffer的大小0-->3包前不包后
// b2.copy(c,3,0,3)
// console.log(c)  //<Buffer e4 b8 ad e5 9b bd>
// console.log(c.toString()) 


// let b1 = Buffer.from("中")
// let b2 = Buffer.from("国")
// let c = Buffer.alloc(5)  //大的buffer空间不够
// b1.copy(c,0,0,3)//将其copy到c，从哪里开始0，然后是小buffer的大小0-->3包前不包后
// b2.copy(c,3,0,3)
// console.log(c) //<Buffer e4 b8 ad e5 9b>
// console.log(c.toString())  //会乱码


// 将小buffer合并成大的buffer
let b1 = Buffer.from("中")
let b2 = Buffer.from("国")
// let c = Buffer.concat(b1,b2)//提示应为数组形式
let c = Buffer.concat([b1,b2])//提示应为数组形式
console.log(c)  //<Buffer e4 b8 ad e5 9b bd>
console.log(c.toString()) //中国



















