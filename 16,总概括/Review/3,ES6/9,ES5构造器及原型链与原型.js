// -------------------------------ES5中普通构造器  new
// 在ES5中不称为类而是构造器
// function Animal(){
//     this.type = "狗类"
// }
// // p是一个对象，new构造器就创建出一个对象
// let p = new Animal()
// console.log(p.type)

// -------------------------------------------构造器中属性
// 构造器中的属性：实例属性和公有属性
// 在ES5中创建一个对象，对象中有实例属性，有共有属性，实例属性定义在构造器上，共有属性定义在原型上


// ------------------------------------无参数传递
// function Person(){
//     // name属于实例属性
//     this.name = "hello"
// }
// // say方法属于公有属性  共属性应定义在原型上
// Person.prototype.say = function(){
//     console.log("say...")
// }
// p代表创建的对象实例
// let p = new Person()
// console.log(p)//Person { name: 'hello' }
// console.log(p.name) //hello
// p.say()//say...

// -------------------------------------参数传递
// function Person(name){
//     this.name = name
// }
// Person.prototype.say = function(){
//     console.log("say...")
// }
// let p1 = new Person("wangcai")
// console.log(p1)//Person { name: 'wangcai' }
// console.log(p1.name) //wangcai
// p1.say()//say...
// let p2 = new Person("tanni")
// console.log(p2.name)//tanni

// --------------------------------判断是否是实例属性
// hasOwnProperty 判断该实例属性的有无
// function Person(name){
//     this.name= name
// }
// Person.prototype.say =function(){
//     console.log("say...")
// } 
// let p = new Person("wangcai")
// console.log(p.name)//wangcai
// console.log(p.hasOwnProperty("name"))//true
// console.log(p.hasOwnProperty("say"))//false


// ------------------------------------原型链与原型
// 每个函数数据类型上存在prototype属性，这个属性指向该函数的原型对象，且它是其实例（对象数据类型）的值
// 该函数原型对象上有一个constructor属性，它指向该函数对象。
// 每个实例（对象数据类型）上存在__proto__属性，该属性值是当前实例所属类的原型（prototype）；

// function Person(name){
//   this.name = name
// }
// Person.prototype.say = function(){
//     console.log("say...")
// }
// let p = new Person("tanni")
// // console.log(p.__proto__===Person.prototype)//true
// // console.log(p.__proto__.hasOwnProperty("say"))//true
// // console.log(p.constructor===p.__proto__.constructor)
// // console.log(p.constructor)//[Function: Person]  实例p的构造器就是Person
// // console.log(p.__proto__.constructor)//[Function: Person] 原本__proto__指向Person的原型对象上，而constructor又指向了该原型对象对应函数Person
// // console.log(Person.prototype.__proto__)//应为父层上的原型对象{Function:Object}
// console.log(p.name)





















