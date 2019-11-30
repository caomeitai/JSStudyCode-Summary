// 是浅copy
// let obj = {name:"tani",age:{number:12}}
// let newObj = {...obj}
// newObj.age.number = 123
// console.log(newObj)//{ name: 'tani', age: { number: 123 } }
// console.log(obj)//{ name: 'tani', age: { number: 123 } }


// --------------------------------多层对象深copy应用
// let obj = {name:"tani",age:{number:12}}
// let newObj = {...obj,age:{...obj.age}}
// // console.log(newObj)
// newObj.age.number = 123
// console.log(newObj)//{ name: 'tani', age: { number: 123 } }
// console.log(obj)//{ name: 'tani', age: { number: 12 } }

// -------------------------------------hasOwnProperty
// let a = {name:"tanni",age:12}
// console.log(a.hasOwnProperty("name"))//判断某对象上是否存在该属性  true

// hasownproperty得到的是对象自身上的属性，不会得到原型链上的属性
// let a = {name:"tanni",age:12}
// console.log(a.hasOwnProperty("toString"))//false  得不到原型链上的属性


// -------------------------------------多层对象的深copy原理
function deepClone(obj) {
    if (obj == null) return obj//去掉null和undefined
    if (typeof obj !== "object") return obj//去掉的是number,string,boolean等基本数据类型
    if (obj instanceof Date) return new Date(obj)//将日期对象去掉
    let newObj = new obj.constructor
    for (let key in obj) {
        // 多层实现深copy的话证明里面再次是个对象，需要再次进行深copy操作
        // 避免去copy原型链上的属性：tostring...
        if (obj.hasOwnProperty(key)) {
            // 递归实现深copy  在递归调用时，陷入死循环，一直使用的都是全局变量
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}
// 多层对象实现深copy  原来是浅copy
let obj = { name: "tanni", age: { number: 12 } }
let newObj = deepClone(obj)
newObj.age.number = 123
// RangeError: Maximum call stack size exceeded  出现这里是因为函数调用但为传递参数
console.log(obj)//{ name: 'tanni', age: { number: 123 } }
console.log(newObj)//{ name: 'tanni', age: { number: 123 } }

