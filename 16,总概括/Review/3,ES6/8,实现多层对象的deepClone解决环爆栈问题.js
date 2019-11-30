// ----------------------------------形成环，出现死循环
// promise中的环代表循环引用，这里也是得到环
// let obj = {}
// obj.b = obj
// console.log(obj)//{ b: [Circular] }


// -------------------------------------深copy原理成环而爆栈问题解决
// 使用WeakMap结构存储已经拷贝的对象，
// 每次进行拷贝时就先向WeakMap查询该对象是否被拷贝，
// 如果已拷贝就去除该对象并返回
function deepClone(obj,hash=new WeakMap()) {
    // console.log(obj)
    if (obj == null) return obj;//去掉null和undefined
    if (typeof obj !== "object") return obj;//去掉的是number,string,boolean等基本数据类型
    if (obj instanceof Date) return new Date(obj);//将日期对象去掉
    // 加上个正则判断
    if (obj instanceof RegExp) return new RegExp(obj);
    // 判断WeakMap中有没有数据，如果有直接返回
    // hash就是WeakMap，里面有has和get等api
    if(hash.has(obj)){
        return hash.get(obj)//将获取到的数据直接返回
    }

    let newObj = new obj.constructor
    // 向新生成的对象中设置数据  其键必须是对象obj
    hash.set(obj,newObj) // 制作一个映射表
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  // 不去copy原型链上的属性
            newObj[key] = deepClone(obj[key],hash)
        }
    }
    return newObj
}
let obj = {}
obj.b = obj
let a = { name:"tanni",age:obj }// { name: 'tanni', age: { b: [Circular] } }
// 实现深copy
console.log(deepClone(a))
