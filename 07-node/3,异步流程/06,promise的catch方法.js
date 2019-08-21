// 1，如果.then中有第2个函数，在这个.then后面又有catch，如果到失败态，它会走.then的第2个函数
// let p = new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{

// },err=>{
//     console.log("1",err)  //1 不OK
// }).catch(err=>{
//     console.log("2",err)
// })

// 2，如果.then中没有第2个函数err，在这个.then后面又有catch，如果到失败态，它会走catch
// let p = new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{

// }).catch(err=>{
//     console.log("2",err)  //2 不OK
// })

//3， 对于在.then的第二个函数中，return err 的话 这个err会return到下一个.then的data函数中
// let p = new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{

// },err=>{
//     console.log("catch方法")
//     return err
//     // console.log("1",err)
// }).then(data=>{
//   console.log("sdsf",data)
// },err=>{
//     console.log("cjdjscjdsl",err)
// })

// 4,最终，一个promise中，一般在then中只有一个函数，在then后面有一个catch，一般使用then来获取data，在catch中获取err
let p = new Promise((resolve,reject)=>{
    resolve("OK")
})
p.then(data=>{
  console.log(data)
}).catch(err=>{
    console.log(err)
})

