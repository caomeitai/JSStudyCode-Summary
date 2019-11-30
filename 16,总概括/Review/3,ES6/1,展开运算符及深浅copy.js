// -----------------------------------展开运算符
// let arr = [1,2,3]
// let b = [...arr]
// console.log(...arr)//1 2 3 
// console.log(b)//[1,2,3]

// ----------------------------------深浅copy
// 浅copy:copy完之后还有关系
// 深copy:copy完之后没有任何关系

// 1，展开基本数据类型时，是深copy，copy完之后没有关系
//   两者没有关系，改变一方不影响另一方
// let a = [1, 2, 3]
// let b = [...a]
// // console.log(b) //[1,2,3]
// b[0] = 12
// console.log(b) //[12,2,3]
// console.log(a) //[1,2,3]
// console.log(a === b)//false
// console.log(a == b)//false


// 2，展开数据是对象时，是浅copy，两者之间存在关系
// let obj = {name:"tanni",age:12}
// let arr = [obj,2,3]
// let newArr = [...arr]
// console.log(arr)//[ { name: 'tanni', age: 12 }, 2, 3 ]
// console.log(newArr)//[ { name: 'tanni', age: 12 }, 2, 3 ]  将对象展开
// newArr[0].name="wangcai"
// // 数据如果是对象的话，还会存在关系，属于浅copy
// console.log(arr)//[ { name: 'wangcai', age: 12 }, 2, 3 ]
// console.log(newArr)//[ { name: 'wangcai', age: 12 }, 2, 3 ]


// 3，slice使用时深浅copy的判断区分
// 1）如果数组中是基础数据类型，属于深copy
// let arr = [1,2,3]
// // slice表示剪切数据，得到一个新的数组，首参是从哪里开始剪切
// // 第二个参数则是到哪里结束，不包括此处的数据；只有一个参数那么就剪切直到最后
// let newArr = arr.slice(0)
// newArr[0] = 666
// console.log(arr)//[1,2,3]
// console.log(newArr)// [666,2,3]基本数据类型的话，都是深copy；两者没有关系

// 2）如果数组中有对象，属于浅copy
// let obj = {name:"tanni"}
// let arr = [obj,2,3]
// let newArr = arr.slice(0)
// console.log(newArr)//[ { name: 'tanni' }, 2, 3 ]
// newArr[0].name = "wangcai"
// console.log(arr)//[ { name: 'wangcai' }, 2, 3 ]
// console.log(newArr)//[ { name: 'wangcai' }, 2, 3 ]


// 4，展开对象，对象就一层是深copy，两者没有关系
// let obj={name:"tanni",age:12}
// let newObj = {...obj}
// // console.log(newObj)//{name:"tanni",age:12}
// newObj.age = 666
// console.log(obj)//{name:"tanni",age:12}
// console.log(newObj)//{name:"tanni",age:666}


//5，展开对象，对象是多层是浅copy，两者存在关系
// let obj = {name:"tanni",age:{number:12}}
// let newObj = {...obj}
// newObj.age.number = 666
// console.log(obj)//{ name: 'tanni', age: { number: 666 } }
// console.log(newObj)//{ name: 'tanni', age: { number: 666 } }


//6，实现多层对象的深copy  无关系
// let obj = {name:"tanni",age:{number:12}}
// // console.log(...obj)//{number:12}
// let newObj = {...obj,age:{...obj.age}}
// // console.log(newObj)//{ name: 'tanni', age: { number: 12 } }
// newObj.age.number = 666
// console.log(obj)//{ name: 'tanni', age: { number: 12 } }
// console.log(newObj)//{ name: 'tanni', age: { number: 666 } }


// 7，通过JSON.parse(JSON.stringify(obj))实现深copy  不存在关系
// let obj = {name:"tani",age:{number:12}}
// let str = JSON.stringify(obj)//将JSON对象转成Json字符串
// // console.log(str)//{"name":"tani","age":{"number":12}}
// let newObj = JSON.parse(str)
// // console.log(newObj)//{ name: 'tani', age: { number: 12 } }
// newObj.age.number = 1233
// console.log(obj)
// console.log(newObj)//{ name: 'tani', age: { number: 1233 } }


// 8，利用JSON.parse(JSON.stringify(obj))的不足之处
// 不足：数据必须满足json格式才能实现深copy
// let obj = {name:"tanni",age:function(){}}
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj)//{name:"tanni"}  会导致数据丢失