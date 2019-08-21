// 调用一个函数3次后，触发另一个函数，需要使用after函数
// const after = (times,fn)=>{  //这里的fn就是要触发的另一个函数
//     return ()=>{
//         if(--times===0){
//             fn()
//         }
//     }
// }
// // after函数返回一个新函数，这里是after函数的调用
// const f1 = after(3,()=>{
//     console.log("已调用一个函数3次啦！")
// })
// f1()
// f1()
// f1()
// f1()







// 练习代码
const after = (times,fn)=>{
    return()=>{
        if(--times===0){
        fn()
       }
    }
    
}
const f = after(3,()=>{//实参
  console.log("shefhcdjcjdkc")
})
f()
f()
f()