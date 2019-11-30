// 深copy之后两者没有任何关系  单层对象
// let obj = {name:"tanni",age:12}
// let newObj = {...obj}
// newObj.name = "wangcai"
// console.log(newObj) //{name:"wangcai",age:12}
// console.log(obj) //{name:"tanni",age:12}


// -------------------------------------深copy原理
// 深copy原理:对于深copy它只适用于数组或者对象，它们的数据类型都是object
// 要排除其它特殊的数据类型：null,undefined,number,new Date()...

// 判断数据null与undefined是否一致好将其排除
// let a;
// let b = null;
// console.log(a == b)//true


// 判断是否是个对象
// let a = {}
// console.log(a)//{}
// console.log(typeof a)//object

// 定义的obj是全局变量 不传递也OK！
function deepClone(obj) {
    // 排除掉特殊数据类型，仅仅留下符合深copy的数据类型（数组或者对象）
    if (obj == null) return obj//去掉null和undefined
    if (typeof obj !== "object") return obj//去掉的是number,string,boolean等基本数据类型
    if (obj instanceof Date) return new Date(obj)//将日期对象去掉


    // 区分出符合条件的是数组还是对象
    // console.log(obj)//{name:"tanni",age:12}  [1,2,3]
    // console.log(obj.constructor)//[Function: Object]  [Function: Array]
    
    // 本质上就是原本何种类型，在深copy之后返回何种类型
    // 创建出一个Array或者Object(此时还未实现深copy，深copy是将原数据完全复制ok)  得到的是对象或者数组
    let newObj = new obj.constructor
    // 利用for in 来遍历数组或者对象
    for(let key in obj){
        newObj[key] = obj[key]
    }
    // console.log(newObj)//{} []
    return newObj
}
let obj = {name:"tanni",age:12}
// let obj = [1,2,3]
// 将对象obj进行深copy  newObj与obj不存在任何关系
let newObj = deepClone(obj)
// console.log(newObj)// {name:"tanni",age:12}  [1,2,3]  
newObj.name = "wangcai"
// newObj[0] = 666
console.log(obj)//{ name: 'tanni', age: 12 }   [1,2,3]
console.log(newObj)//{ name: 'wangcai', age: 12 }  [666,2,3]



