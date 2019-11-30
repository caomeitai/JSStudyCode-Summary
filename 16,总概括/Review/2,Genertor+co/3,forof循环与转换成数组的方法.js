// for-of是用来循环的，它要求你循环的对象必须有一个iterator
// 如果一个对象中有个iterator，那么这个对象就是iterable对象
// 如果一个对象是iterable对象，说明这个对象可以被迭代的
// 在js中，数组，Set,map都是iteratble对象，可以使用forof进行迭代


// ------------------------------------------console.log()与console.dir()的区别
// console.log它可以代替alert()和document.write(),在网页脚本中使用console.log()时，可以在网页的控制台打出信息。
// console.dir它可以打印出一个对象的所有属性和方法。
// let colors = ['red','green','blue'];
// console.log(colors) //[ 'red', 'green', 'blue' ]
// console.dir(colors) //[ 'red', 'green', 'blue' ]


// -----------------------------------------------forof最最基本的使用
// forof对数组进行循环遍历，使用forof的前提是这个集合必须是可迭代的。
// let colors = ['red','green','blue'];
// for(value of colors){
//     console.log(value)//拿到red,green,blue等值
// }


// -------------------------------------伪数组不可迭代，无法展开
// 伪数组本质是个对象 它是不可迭代的，因此也就不存在展开这一说
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// console.log(...obj)//Found non-callable @@iterator
// let realArray = [...obj]
// console.log(Array.isArray(realArray))

// ---------------------------------1，将不是iterable的伪数组转为数组Array.from
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// // 先将伪数组转为了数组
// let realArray = Array.from(obj)
// console.log(realArray)//['a','b']
// console.log(Array.isArray(realArray))//true


// --------------------------------2，将不是iterable的伪数组转为数组（仅仅是变为可迭代的）
// 就是给其加上interator
let obj = {
    0: "a",
    1: "b",
    // 加上iterator是obj变为可迭代的
    [Symbol.iterator]() {
        let i = 0;
        return {
            next:()=> {
                // 将普通函数换成箭头函数来改变this的指向
                // console.log(this)//{ next: [Function: next] }
                // 这里的this应该是可迭代集合在这里需要代表是obj
                
                // 高级点的判断法
                // value = this[i]
                // done = this.length===i++

                // 原始value和done判断法
                value = this[i++]
                done = this.length < i ? true : false
                return {
                    value: value,
                    done: done,
                }
            }
        }
    },
    length: 2
}
let realArray = [...obj]
console.log(realArray)//['a','b']
console.log(Array.isArray(realArray))//true























