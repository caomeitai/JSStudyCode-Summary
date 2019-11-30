// ---------------------------------箭头函数  它的测试需要在浏览器中
// 函数调用要注意函数返回值，没有的话就是undefined
// function f(x) {
//     function g(y) {
//         return x + y
//     }
//     // console.log(g(2))//3
//     return g(2)
// }
// console.log(f(1))//undefined  f函数没有返回值
// console.log(f(1))//3

// 简化上述代码为箭头函数  另外还存在立即调用函数()
// console.log((x => (y => x + y)(2))(3))//5

// ------------------------------------箭头函数this指向
// 箭头函数中没有arguments，没有this，没有prototype

// --------------------------setTimeout挂载在window上，调用的话是被window调用 let
// let a = 120
// let obj = {
//     a: 666,
//     f: function () {
//         setTimeout(function () {
//             console.log(this)//window
//             console.log(this.a)//undefined  let不挂到window上
//         }, 1000)
//     }
// }
// obj.f()

// -----------------------------settTimeout    var
// var a = 120
// let obj = {
//     a: 666,
//     f: function () {
//         setTimeout(function () {
//             console.log(this)//window
//             console.log(this.a)//120  var出来的变量存在于window上
//         }, 1000)
//     }
// }
// obj.f()

// ------------------------------箭头函数this指向
// let a = 120
// let obj = {
//     a: 666,
//     f: function () {
//         // 原本this指向是window，因为箭头函数中不存在this
//         // 它会自动跳出一层，就跑到函数f，f函数是被obj调用的，this就指向obj
//         setTimeout(()=>{
//             console.log(this)//obj
//             console.log(this.a)//666
//         }, 1000)
//     }
// }
// obj.f()

// -----------------------------箭头函数this指向 var
// var a = 120
// let obj = {
//     a: 666,
//     // 与上面同理，this在往上跑一层 obj的外边就是window，看是let还是var
//     f:()=> {
//         setTimeout(()=>{
//             console.log(this)//window
//             console.log(this.a)//120
//         }, 1000)
//     }
// }
// obj.f()

// --------------------------箭头函数this指向  let
let a = 120
let obj = {
    a: 666,
    // 与上面同理，this在往上跑一层 obj的外边就是window，看是let还是var
    f:()=> {
        setTimeout(()=>{
            console.log(this)//window
            console.log(this.a)//undefined
        }, 1000)
    }
}
obj.f()





















