// Set里面允许存储任何类型的唯一值(没有重复数据)，无论是原始值还是对象引用
// 语法：new Set([iterable]);里面存放可迭代数据
// 参数：如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为null，则新的Set为空。
// 返回值：一个新的Set对象


// -----------------------------------创建空的Set
// 不给Set传递参数，参数为空或者是null时都为空Set
// let set = new Set()
// // let set = new Set(null)
// console.log(set) //Set {}

// ----------------------------------创建有内容的Set
// let s = new Set([1,2,3])
// console.log(s)//Set {1,2,3}

// ---------------------------------创建存储任何值的Set
// 给Set传递的参数可以是任意类型
// let s = new Set([1,2,true,undefined,null,function(){}])
// console.log(s)//Set { 1, 2, true, undefined, null, [Function] }

// ---------------------------------Set中不能存储相同的值
// 比起说不能存储倒不如说是可以筛选出不重复的数据，形成新的Set
// let s = new Set([1,2,3,4,2,3])
// console.log(s)//Set { 1, 2, 3, 4 }

// 快速去掉数据中相同的值
// let arr = [1,2,3,2,3]
// let s = new Set(arr)
// console.log(s)//Set { 1, 2, 3 }

// -----------------------------------Set中的Api
// let s = new Set([1,2,3])
// s.add("hello")
// console.log(s)//Set { 1, 2, 3, 'hello' }
// s.delete(1)
// console.log(s)//Set { 2, 3, 'hello' }
// s.clear()
// console.log(s)//Set {}

// ----------------------------------遍历Set
let s = new Set(["a","b","c"])
s.forEach(item=>console.log(item))//a b c  类似于数组直接forEach

// entries 返回新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。
console.log(s.entries())//[Set Iterator] { 'a', 'b', 'c' }
// 因为是迭代器需要next之后才能拿到值  有问题
// console.log(s.entries().next().value)//[ 'a', 'a' ]  
// console.log(s.entries().next().value)//[ 'a', 'a' ]
// console.log(s.entries().next().value)//[ 'a', 'a' ]

for(value of s.entries()){
    console.log(value)//['a','a'] ['b','b'] ['c','c']
}




