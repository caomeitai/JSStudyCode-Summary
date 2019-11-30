// --------------------------------------------------------解构赋值概念
// 解构赋值代表着解开解构为其赋值
// let x =['a','b','c']//仅仅是数组的赋值操作

// -----------------------------------解构赋值结构，参数数量，数据结构一致
// 数组解构赋值
// let [a,b,c] = [1,2,3]
// console.log(a,b,c)//1 2 3

// 数组值为空，就不可得到该值
// let [,b,c] = [1,2,3]
// console.log(b,c)//2 3

// 二者结构就不一致，得不到数据的
// let {a,b,c} = [1,2,3]
// console.log(a,b,c)//undefined undefined undefined


// 对象解构赋值
// ----------------------------对象解构赋值要求key一样
// let {a,b} = {name:"tanni",age:12}
// let {name,age} = {name:"tanni",age:12}
// console.log(a,b)//undefined  undefined
// console.log(name,age)//tanni 12


// -----------------------------给key起别名
// let {name:a,age:b} = {name:"tanni",age:12}
// console.log(a,b) 


// --------------------得到隐藏的属性，两侧的结构不一样
// let {length} = [1,2,3]
// console.log(length)//3 拿到隐藏属性


// ------------------------------------------剩余运算符或者说扩展运算符...
// 剩余运算符：将剩余的数值进行赋值
// let [a,...args] = [1,3,4]
// console.log(...args)//直接得到剩余数值

// 扩展运算符：将数据展开进行赋值
// let arr = [1,2,3]
// let newarr = [...arr]
// console.log(...arr)//...可将数据全部展开1,2,3
// console.log(newarr)//得到展开之后的数组 [1,2,3]










