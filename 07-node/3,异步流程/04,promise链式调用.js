// 1，判断结果时，只需要注意promise.then啥时候执行，是哪个.then
// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello") //传递给下面的.then中的第一个参数data  但data并未使用
//     },1000)
// })
// p.then(data=>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           resolve("world")  //它传给下面的.then
//       },1000)
//   })
// },err=>{}).then((data)=>{
//     console.log(data) //world 继承了return中的promise中的状态
// })


// 2，当在.then中将p.then作为返回值返回时得不到结果。
// 因为p.then是一个promise，它却没有状态传递，结果也就没有了
// let p = new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// // 等效于p.then().then()
// let p1 = p.then(data=>{
//   return p1  //仅仅返回一个promise，并未将其状态传递过去，data这个状态也就不存在啦
// //   return "abc"  //返回了成功的最终值
// }).then((data)=>{
//     console.log(data) 
// })
// p.then(data=>{
//     // console.log(data)
//     return "tanni"
// }).then(data=>{
//     console.log(data)
// })


// 3，陷入了循环引用   可将循环引用一直处于等待态这件事想作是失败了的事情，要得到失败原因
// let p = new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1 = p.then(data=>{
//     return p1
// })
// // 会陷入到循环引用  就比如：我在等我吃饭  进入了死循环  可以想作  成为了错误事件
// p1.then(data=>{
//     console.log(data) 
// },err=>{
//     console.log("走的是这里",err)//Chaining cycle detected for promise #<Promise>
// })


// （1）不再一直处于等待态，转成了成功态获取成功的最终值
// let p = new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1 = p.then(data=>{
//     return 133  //它将等待态转成成功态
// })
// p1.then(data=>{
//     console.log(data) 
// },err=>{
//     console.log("走的是这里",err)
// })


// （2）不再一直处于等待态，转成了失败态获取失败的原因
// let p = new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1 = p.then(data=>{
// 扔了错误就要走.then中的第二个函数
//     return new Error("失败啦")  //它将等待态转成失败态
// })
// p1.then(data=>{
//     console.log(data) 
// },err=>{
//     console.log(err)
// })

let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("OK")
        //    reject("不OK")
       },1000)
   })
})
p1.then(data=>{
    console.log(data) 
},err=>{
    console.log(err)
})




