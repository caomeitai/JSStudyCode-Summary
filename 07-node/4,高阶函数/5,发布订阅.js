// 一般情况下都是先订阅后发布   发布与订阅之间不存在关系
// let content = {name:"tanni",age:12};
// console.log(Object.keys(content))  //Object.keys拿到的是键值名  value拿到的是键值
// Btn.on("click",()=>{})  //click就可以想成是订阅，当点击事件发生时就有了发布



// const fs = require("fs")
// let content = {}  //定义容器装内容
// let e ={
//     // 订阅可以有多个，在订阅时将on后面的函数保存到一个容器，发布时，拿到这个容器，把里面的函数执行了
//     arr:[],
//     on(fn){
//       this.arr.push(fn)
//     },
//     emit(){
//         // 在发布时，将数组中的函数都便利出来，并执行一下
//         this.arr.forEach(fn=>fn())
//     }
// }
// // 此时仅仅是订阅
// // e.on()这里代表函数调用，它()是实参，实参为一个函数传给上面e对象中的on方法
// e.on(()=>{
//     //  Object.keys(content)得到其键值名，下面判断content中是否得到内容
//   if(Object.keys(content).length == 2){
//       console.log(content)
//   }  
// })
// // 读取文件，在每次读取文件成功时都进行发布，而每次发布都触发on事件
// fs.readFile("./name.txt","utf8",(err,data)=>{
//     content['name']=name;
//     // e.emit()
// })
// fs.readFile("./age.txt","utf8",(err,data)=>{
//     content['age']=age;
//     e.emit()
// })


// 简化代码
// let e = {
//     arr:[],//存放on订阅的函数
//     on(fn){
//       this.arr.push(fn)
//     },
//     emit(){
//         this.arr.forEach(fn=>fn())
//     }
// }
// // 订阅
// e.on(()=>{
//     console.log("订阅啦")
// })
// e.on(()=>{
//     console.log("订阅啦")
// })
// e.on(()=>{
//     console.log("订阅啦")
// })
// // 发布
// e.emit()


// 练习代码
// 发布订阅如下：
let e ={
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>fn())
    }
}
e.on(()=>{
    console.log("打印出来了订阅")
})
e.emit()





















































