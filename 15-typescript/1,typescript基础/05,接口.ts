/* ---------------------------------什么是接口
// api接口是一个网站，java和ts中的接口，你可以当成比抽象类还抽象的东西
// 一个类可以继承一个抽象，去实现一个接口；一个类只能继承一个类（抽象类），但是可以实现多个接口
// 抽象类：
abstract class Animal{
    name:string//实例属性
    say(){  //实例方法
       console.log("抽象类中的实例方法")
    }
}

// 接口：不是类，也不能new，只能让别的类实现。
// interface定义一个接口，接口中放了很多方法，目的就是为了让别的类去实现接口，也就是实现方法
interface Flying{
    // 仅仅放一些方法的声明
    fly():void;
}
interface Eating{
    // 仅仅放一些方法的声明
    eat():void;
}
*/ 
/*-------------------------------------接口使用
// 1）定义抽象类
abstract class Animal{
    name:string//实例属性
    say(){  //实例方法
       console.log("抽象类中的实例方法")
    }
}
// 2）定义一个接口
interface Flying{
    fly():void;
}
// 2）定义一个接口
interface Eating{
    eat():void;
}

// 3）除了继承父类外，还有接口实现
class Dog extends Animal implements Flying,Eating {
   // 实现接口函数
    fly(){
       console.log("fly.......")
    }
    eat(){
       console.log("eat.......")
    } 
}
let d  = new Dog();
d.say()//继承父类方法
//实现接口方法
d.fly()
d.eat()
*/


/* --------------------------------------抽象类来模拟接口
// 如果一个抽象类中都是抽象方法，它就和接口一样
// 抽象方法是不能够实现的
abstract class Animal{
    //  抽象方法 仅仅声明定义
    abstract jump():void;
}
class Dog extends Animal{
    // 如果继承一个抽象类，抽象类中又有抽象方法，那么一定要实现该方法
    jump(){
        console.log("jump....")
    }
}
let d = new Dog()
d.jump() //jump....

*/
/* ------------------------------------------------接口功能
// 接口方法抽象，由子类去继承接口，本质上是实现接口
// 接口的核心原则之一：进行类型检查，就是对我们的代码或者第三方代码进行类型校验

// -----------------------------------------------校验对象
// 接口定义，定义的方法是抽象的，不能够实现
interface MyObj{
   name:string,//接口定义属性
   spack():void//接口定义方法
}
// 利用接口对对象进行校验，规定存在什么样的类型数据,且实现接口中的方法
// 规定对象类型为定义好的接口类型
let obj:MyObj = {
   name:"tanni",
   spack(){
       console.log("接口实现对象校验")
   }
}
obj.spack() //接口实现对象校验

// 小案例：限制矩形只能有width和height  校验的是对象
interface Rect{
    width:number,
    height:number,
}
let rect:Rect = {
    width:120,
    height:123
}

//-------------------------------------------------接口用来描述行为的抽象，接口可以继承

// 接口中仅仅定义方法
interface Animal{
    eat():void,
    jump():void,
    sleep():void
}
// 一个接口可以继承另一个接口
interface People extends Animal{
    study():void
}
// 写类来实现接口方法
class Wc implements People{
    eat(){
        console.log("eat...")
    }
    jump(){
        console.log("jump...")
    }
    sleep(){
        console.log("sleep...")
    }
    study(){
        console.log("study...")
    }
}
let wc = new Wc()
wc.jump()//jump...接口中的方法都可调用

// --------------------------------------------校验函数
// 接口函数校验，约束的仅仅是形参列表和函数的返回值
// 实例1：
interface Mysum{
    // 只需要写形参列表（形参名是不固定的）和函数返回值类型
    (n:number):number //形参类型为number,函数返回值也是number类型
}
let sum:Mysum = function(price:number):number{
    return price*.8
}
console.log(sum(800))//640  规定的函数参数和返回值都是数值

// 实例2：
interface SumInterface{
    // 从接口规定可知，参数个数及类型，返回值类型
    (a:number,b:number):number
}
// let Sum:SumInterface = function(a,b){
let Sum:SumInterface = function(a:number,b:number):number{
   return a+b
}
console.log(Sum(1,2))//3

*/
/* -----------------------------------------接口规定某些属性必须有，其他任意
interface Person{
    readonly id:number,
    name:string,
    [propName:string]:any//表示其他属性名为字符串，类型是任意的
}
let p:Person = {
    id:12,
    name:"tanni",
    // 除了上述属性外，其他属性可以不写，写了的话类型任意。
    address:"beijing",
    age:12
}
*/
/* --------------------------------------arguments
// arguments会收集实际参数，形成伪数组，利用args中的IArguments类型，表示args类型是argument
// 将伪类转成数组需要的方法就只有Array.prototype.slice.call(args)从而将伪数组转成数组
// 数组累加使用reduce
interface SumInterface{
    (a:number,b:number,c:number):number
}
let sum:SumInterface = function():number{
    //   arguments收集实参，它是一个伪数组
    // console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 3 }
    let args:IArguments = arguments//将实参全部赋给args
    console.log(args)//[Arguments] { '0': 1, '1': 2, '2': 3 }
    // 将伪类数组转成数组形式
    console.log(Array.prototype.slice.call(args))//[ 1, 2, 3 ]
    // 获取到的是数组每一项相加之和，reduce属性，最终返回值为和。
    return Array.prototype.slice.call(args).reduce((pre,next)=>pre+next,0)
}
console.log(sum(1,2,3)) //6

// args
interface SumInterface{
    // let arr:number[] = [1,2,3],//表示定义的数组数据类型是number类型
    (...args:any):number//参数类型为任意类型，返回值为number类型
}
// 接口定义参数类型不确定，但在函数中直接规定参数是数组形式
let sum:SumInterface = function(...args:any[]):number{
    console.log(args) //[ 1, 2, 3 ]
    return args.reduce((pre,next)=>pre+next,0)
} 
console.log(sum(1,2,3))
console.log(typeof sum("a","v","c"))//0avc   string

*/


/* --------------------------------------------可索引接口(约束数组)
// 数组约束的方法
let arr:string[] = ["z3","l4","w5"]
let arr1:Array<string> = ["e4","e2","wc"]

// 接口约束数组：
// 可以利用接口对数组进行约束
interface ArrInterface{
    //表示数组索引是number类型，数组值是字符串类型
    [index:number]:string
}
let arr:ArrInterface = ["z3","l4"];
// let arr1:ArrInterface = [1,2,3]//数据类型必须是字符串
*/


/* -------------------------------------------可索引接口(约束对象)
interface ObjInterface{
    // 对象的索引就是键名，是字符串；键值也是字符串。
    [index:string]:string
}
let obj:ObjInterface = {"name":"tanni"}//对象中键名1的引号可省略
let obj1:ObjInterface = {name:"tanni"}
*/

/*---------------------------------------------接口可以约束类 
// 创建一个类
class Animal{
    constructor(name:string){}
}
// new时会传递参数，其类型就是new上的这个类
let a = new Animal("pig")
console.log(a) //Animal {}

// 利用接口约束创建的类存在name属性，且接口创建的类的类型是Animal
interface WithNameClass{
    new(name:string):Animal
}
// 该函数会创建一个根据WithNameClass接口约束得到的类,存在name属性
function createClass(newclass:WithNameClass,name:string){
    return new newclass(name)
}
// 创建一个基于Animal类型的拥有name属性的类
let b = createClass(Animal,"tanni")
console.log(b)

*/


// 总结：
// 1，接口不属于类，不能new，接口中定义好多抽象方法。
// 2，接口中定义的抽象方法只能由其它类来实现
// 3，进行类型校验：对对象，函数，类...
// 4，也就是对对象(数据)，函数，索引(约束对象索引，数组)，类进行约束，规定其相关类型

export {}