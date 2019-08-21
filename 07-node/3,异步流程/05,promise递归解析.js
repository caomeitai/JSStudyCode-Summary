// let p = new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1 = p.then(data=>{
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         //  resolve("第一层")
//          resolve(new Promise((resolve,reject)=>{
//              setTimeout(()=>{
//                  resolve("递归解析")
//              },1000)
//          }))
//      },1000)
//     })
// })
// // 这个.then是上面第一个return的promise的函数，再调用resolve时出现了新的promise，则data为promise
// // 它会将值解析出来之后再赋给data
// p1.then(data=>{
//   console.log(data)
// },err=>{
//   console.log(err)
// })


let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    // 如果在resolve或者reject中又嵌套promise，会发生递归解析的，也就是将所有promise解析完毕，再进行赋值
    return new Promise((resolve,reject)=>{
         resolve(new Promise((resolve,reject)=>{
            resolve(new Promise((resolve,reject)=>{
                resolve(new Promise((resolve,reject)=>{
                    resolve(new Promise((resolve,reject)=>{
                        resolve("promise的递归解析啊")
                    }))
                }))

            }))
         }))
    })
})
// 原本应为promise，但是它进行了递归解析
p1.then(data=>{
  console.log(data)
},err=>{
  console.log(err)
})
