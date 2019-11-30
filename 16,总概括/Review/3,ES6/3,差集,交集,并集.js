// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// 并集：[1,2,3,4,5,6]
// 交集：[3,4]
// 差集：arr1-arr2 = [1,2]; arr2-arr1 = [5,6]

// 总结：任何算法在进行操作之前都可先去除重复数据Set


// --------------------------------并集
// -----------------------不传递参数
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function union() {
//     let s1 = new Set(arr1)
//     // console.log(typeof s1)//object  Set对象
//     // console.log(...s1)//1 2 3 4
//     let s2 = new Set(arr2)
//     // console.log(...s2)//3 4 5 6
//     let s = new Set([...s1, ...s2])
//     // console.log(s)//Set { 1, 2, 3, 4, 5, 6 } 同样去除了重复数据
//     return [...s] // [1,2,3,4,5,6]
// }
// console.log(union())//[1,2,3,4,5,6]

// -----------------------传递参数
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function union(arr1,arr2) {
//     // let s1 = new Set(arr1)
//     // let s2 = new Set(arr2)
//     // let s = new Set([...s1, ...s2])
//     // return [...s] 

//     let s = new Set([...arr1,...arr2])
//     return [...s]
// }
// console.log(union(arr1,arr2))//[1,2,3,4,5,6]

// -------------------------------交集--->用到了Set和filter等方法
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function intersection(arr1,arr2){
//     let s1 = new Set(arr1)
//     let s2 = new Set(arr2)
//     // 将数组中满足条件的数据过滤出来，返回形成的新数组
//     return [...s1].filter((item)=>{
//         // 将满足条件的数据返回
//        return s2.has(item)
//     })
// }
// console.log(intersection(arr1,arr2))//[3,4]

// -----------------------------------差集
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function difference(arr1,arr2){
//    let s1 = new Set(arr1)
//    let s2 = new Set(arr2)
//    return [...s1].filter((item)=>{
//       return !s2.has(item)
//    })
// }
// console.log(difference(arr1,arr2))//[ 1, 2 ]

// 全局变量  不需要传参
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function difference() {
//     let s1 = new Set(arr1)
//     let s2 = new Set(arr2)
//     return [...s1].filter((item) => {
//         // 返回的是true或者false
//         return !s2.has(item)
//     })
// }
// console.log(difference())//[ 1, 2 ]


















