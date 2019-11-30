// --------------------------------ES6中class基本使用  
// class Animal{
//     // 实例属性存放在构造器中  可以与ES5进行对比记忆
//    constructor(name){
//       this.name = name
//    }
// }
// let a = new Animal("tanni")
// console.log(a.name)

// ------------------------------ES6中抽象类模拟
// class Animal{
//     constructor(name){
//         if(new.target===Animal){
//           throw Error("抽象类，不能new")
//         }
//          //实例属性
//         this.name = name
//     }
// }
// let a = new Animal()//Error: 抽象类，不能new

// --------------------------------------------定义公共属性
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     say() {
//         console.log("say...")
//     }
// }
// let a = new Animal("tanni")
// console.log(a.name)//tanni
// a.say()//say...
// // 判断实例属性与否：
// console.log(a.hasOwnProperty("name"))//true
// console.log(a.hasOwnProperty("say"))//false

// --------------------------------------------访问器js  ts  他也属于公共属性
// 访问器属性：该属性不包含数据值，包含的是一对get和set方法
// 访问器属性不能直接定义，要通过Object.defineProperty()这个方法来定义。
// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     // 访问器类似于原型上的函数
//     get age(){
//        return 12;
//     }
// }
// let a = new Animal("niantan")
// console.log(a.name)//niantan
// console.log(a.age)//12  将访问器直接当成属性来用
// console.log(a.hasOwnProperty("age"))//false  它不是实例属性
// console.log(a.__proto__.hasOwnProperty("age"))//true  是公共属性
// console.log(Animal.prototype.hasOwnProperty("age"))//true  是公共属性

// ------------------------------------------静态属性
// ES6中属性：实例属性，公共属性，静态属性
// class Animal {
//     static a = 110;
//     constructor(name) {
//         //实例属性
//         this.name = name
//     }
//     // 公共属性
//     get age(){
//         return 12
//     }
// }
// let a = new Animal("tanni")
// // 静态属性通过static来声明，通过类名来调用
// console.log(Animal.a)// 110 在浏览器中可以得到


// --------------------------------------ES6中继承
// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     say(){
//         console.log("say...")
//     }
// }
// // 继承Animal类中的属性
// class Dog extends Animal{

// }
// let d = new Dog("wangcai")
// console.log(d.name)
// d.say()


// ----------------------------------继承 子类中存在属性
// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     say(){
//         console.log("say...")
//     }
// }
// 继承Animal类中的属性  显示调用父中constructor
// class Dog extends Animal{
//     //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     constructor(props){
//         super(props)
//        this.age = props
//     }
// }
// let d = new Dog(12)//参数赋给了age
// console.log(d.age)

// let d = new Dog("wangcai")
// console.log(d.name)//wangcai
// d.say() //say...



// ------------------------------练习
// class Animal{
//     constructor(name){
//         this.name = name
//     }
// }
// class Dog extends Animal {
//    constructor(props){
//        super(props)
//        this.age = props
//    }
// }

// let d = new Dog(12)
// console.log(d.age)//参数传递给了子类，直接给到constructor中

// let d = new Dog("wangcai")
// console.log(d.name)












