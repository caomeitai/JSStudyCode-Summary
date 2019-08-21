// node是基于事件驱动的  导入events模块
// 当导入时用来大写则证明它是一个属性，而非模块
// let EventEmitter = require("events")

// 自动手写  EventEmitter这个属性
// class EventEmitter{
// // 之前存储事件是使用数组，现在存在了事件名，所以应该用对象
//     constructor(){
//       this._events = {} //存放所有事件
//     } 
//     on(eventName,callback){
//         // 如果存在on订阅事件的话
//        if(this._events[eventName]){
//         //将其他的callback推到数组里面    this._events[eventName]是对象中的一个数组 
//         this._events[eventName].push(callback)  
//        }else{//在最最开始时，如果没有订阅事件，那么会调用回调函数，将其以数组的形式赋给事件名
//         this._events[eventName]=[callback]  //拿到每一个事件对应回调函数
//        }
//     }
//     // 发布事件也存在了事件名，它会遍历拿到数组事件名中的所有事件执行
//     emit(eventName){
//       this._events[eventName].forEach(fn=>fn())
//     }
// }
// // 属性在创建对象时要求new一下  这样就拿到事件对象e
// let e = new EventEmitter()
// // 订阅事件函数，它需要在发布时才能够执行
// e.on("看报纸",()=>{
//     console.log("正在看报纸1....")
// })
// e.on("看报纸",function(){
//     console.log("正在看报纸2....")
// })
// e.on("吃饭",function(){
//     console.log("正在吃饭呢....")
// })
// // 发布事件函数，里面参数与订阅事件名一致
// e.emit("看报纸")
// e.emit("吃饭")


// 想要取消订阅方法
// let EventEmitter = require("events")
// class EventEmitter{
//     constructor(){
//       this._events = {} 
//     } 
//     on(eventName,callback){
//        if(this._events[eventName]){
//         this._events[eventName].push(callback)  
//        }else{
//         this._events[eventName]=[callback]  
//        }
//     }
//     emit(eventName){
//       this._events[eventName].forEach(fn=>fn())
//     }
// }
// let e = new EventEmitter()
// e.on("看报纸",()=>{
//     console.log("正在看报纸1....")
// })
// e.on("看报纸",function(){
//     console.log("正在看报纸2....")
// })
// e.on("吃饭",function(){
//     console.log("正在吃饭呢....")
// })
// e.emit("看报纸")
// // 直接这样写不OK
// e.off("看报纸",function(){
//     console.log("取消订阅")
// })
// e.emit("吃饭")

// 取消订阅的话需要与进行订阅的函数一致
// let EventEmitter = require("events")
// let e = new EventEmitter()
// let fun =()=>{
//     console.log("正在看报纸1....")
// }
// e.on("看报纸",fun)
// e.on("看报纸",function(){
//     console.log("正在看报纸2....")
// })
// e.on("吃饭",function(){
//     console.log("正在吃饭呢....")
// })
// e.emit("看报纸")
// e.off("看报纸",fun) //保证了订阅函数与取消订阅的函数一致就OK啦
// e.emit("看报纸")
// e.emit("吃饭")



// let EventEmitter = require("events")
class EventEmitter{
    constructor(){
      this._events = {} 
    } 
    on(eventName,callback){
       if(this._events[eventName]){
        this._events[eventName].push(callback)  
       }else{
        this._events[eventName]=[callback]  
       }
    }
    emit(eventName){
      this._events[eventName].forEach(fn=>fn())
    }
    off(eventName,callback){
        // 用来过滤掉要取消订阅的函数  得到一个新的数组重新赋给事件名的那个数组
        this._events[eventName] = this._events[eventName].filter(fn=>{
        // 最终返回的那个新数组中存着其他不用取消订阅的所有回调函数
           return fn != callback

       })
    }
}
let e = new EventEmitter()
let fun =()=>{
    console.log("正在看报纸1....")
}
e.on("看报纸",fun)
e.on("看报纸",function(){
    console.log("正在看报纸2....")
})
e.on("吃饭",function(){
    console.log("正在吃饭呢....")
})
e.emit("看报纸")
e.off("看报纸",fun) //保证了订阅函数与取消订阅的函数一致就OK啦
e.emit("看报纸")
e.emit("吃饭")