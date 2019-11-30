// Map对象保存键值对。任何值(对象或者原始值)都可以作为一个键或一个值。
// 语法：new Map([iterable])与Set极其相似
// 参数：参数只需是可迭代的集合即可，其元素为键值对，例如：[[1,'one'],[2,'two']]，而null会被当做undefined。
// 遍历：Map对象根据对象中的插入顺序来进行forof循环迭代，最后会返回一个形式为[key,value]的数组

// ----------------------------创建空的Map
// // let map = new Map()
// let map = new Map(null)//null会被默认为undefined
// console.log(map)//Map {}

// ---------------------------创建由内容的Map
// 其数据肯定是可迭代的，但是要以数组形式存储，且元素也都为键值对中间用逗号隔开
// let map = new Map([["name","tanni"],["age",12]])
// console.log(map)//Map { 'name' => 'tanni', 'age' => 12 }

// --------------------------Map中的api
// --------------------------------------get得到键对应的值
// 它是需要''引起来的；如果不存在，则返回undefined。
// let map = new Map([["name","tanni"],["age",12]])
// console.log(map.get("name"))//tanni

// ---------------------------------------set设置map中数据
// let map = new Map([["name","tanni"],["age",12]])
// map.set("sex","男")
// console.log(map)//Map { 'name' => 'tanni', 'age' => 12, 'sex' => '男' }

// let map = new Map([["name","tanni"],["age",12]])
// map.set({"address":"住址"},"beijing")
// console.log(map)//Map {'name' => 'tanni','age' => 12,{ address: '住址' } => 'beijing' }


// 设置数据导致的内存泄漏问题
// let map = new Map([["name","tanni"],["age",12]])
// let obj = {"address":"住所"}
// map.set(obj,"zhengzhou") 
// obj = null
// console.log(map) // Map {'name' => 'tanni','age' => 12,{ address: '住所' } => 'zhengzhou' } 

// class Dog{}
// let dog = new Dog()
// let map = new Map([["name","tanni"],["age",12]])
// // console.log(dog)//Dog{}
// map.set(dog,"nan")
// console.log(map)//Map { 'name' => 'tanni', 'age' => 12, Dog {} => 'nan' }
// dog = null
// console.log(map)//Map { 'name' => 'tanni', 'age' => 12, Dog {} => 'nan' }
    
    
// ------------------------------------WeakMap
// WeakMap对象是一组键/值对的集合，其中的键是弱引用的。
// 其键必须是对象，而值可以是任意的;与Map相比较，Map中键和值都是任意的


// 有效的解决了内存泄漏问题
class Dog{}
let dog = new Dog()
// WeakMap的键必须是对象
let map = new WeakMap();
map.set(dog,"nan")
console.log(map)//WeakMap {Dog => "nan"}
dog = null//这样在内存中就不存在Dog数据
console.log(map)//WeakMap {Dog => "nan"}




















