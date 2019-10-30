/*-----------------------------typeof关键字  typeof类型保护
// 利用typeof来对数据类型进行判断，从而看看是否可以使用对应的属性.length...

function sum(val:string|number|boolean){
   // return val.length  //出错原因：number和boolean类型中不存在.length
   if(typeof val==="string"){
       return val.length
   }else if(typeof val==="number"){
       return val
   }else(typeof val==="boolean"){
       return val
   }
}
console.log(sum("wangcai"))//7
console.log(sum(1))  //1
console.log(sum(true))  //true
*/

/*----------------------------------------instanceof 关键字  instanceof类型保护
instanceof实例，那么肯定与类有关系：
class Animal{
    name:string
}
class Dog extends Animal{
    age:number
}
function f(a:Animal){
    if(a instanceof Dog){
        console.log(a)//Dog{}
    }else if(a instanceof Animal){
        console.log(a)//Animal{}
    }
}
let d = new Dog();//d的类型就是Dog这个类，它属于Dog实例
f(d)// 兼容OK f函数需要的类型是Animal，但提供的却是继承了Animal类型的子类型
let a = new Animal();//a的类型就是Animal这个类，它属于Animal实例
// f(a) // 兼容是肯定的
*/

/*------------------------------------------null关键字  null类型保护
// 1）参数值为字符串类型：存在chartAt
function f(val:string){
  return val.charAt(0)
}
console.log(f("hello"))//h

// 2）类型null，变量null中不存在charAt
function f(val:string|null){
  return val.charAt(0)
}
console.log(f("hello"))//h
// 在null中不存在charAt该属性
console.log(f(null))// Cannot read property 'charAt' of null

// 3）将null变量变为空字符串，也就存在charAt属性
function f(val:string|null){
 //加上下面判断，使得null变量变为空的字符串
    if(val===null){
      return ""
  }
  return val.charAt(0)
}
console.log(f("hello"))//h
console.log(f(null))//此时不再报错

// 4）使得null不报错，去掉左右两边空格
function f(val:string|null){
      val = val||""    
      function g(){
          console.log(val!.trim())
        // console.log(val.length)//12
      }
      g()
      return val.charAt(0)//这里得到的是空
}
f("   hello    ")
console.log(f(null))
*/

/*-----------------------------联合类型
// ts类型系统，基本类型，class(类类型),type(定义类型),interface(接口类型)
interface PrimiryButton{
    style:"primiry",
    text:"点击"
}
interface DangerButton{
    style:"danger",
    text:"登录"
}
type Button = PrimiryButton|DangerButton;
function f(b:Button){
    if(b.style==="primiry"){
        console.log("PrimiryButton")
    }
    if(b.style==="danger"){
        console.log("DangerButton")
    }
}

// 联合类型，button类型可能是PrimiryButton，也可能是DangerButton
f({style:"primiry",text:"点击"})//PrimiryButton
f({style:"danger",text:"登录"})//DangerButton
*/

/*--------------------------------------in关键字  in的类型保护
// in  判断一个属性是否在一个接口或者类中
interface A{
  name:string,
  say():void
}
interface B{
    age:number,
    jump():void
}
function f(c:A|B){
    if("name" in c){
        console.log(c)
    }else if("age" in c){
        console.log(c)
    }
}
// 类型来自于A
f({name:"tanni",say(){console.log("say...")}})//{ name: 'tanni', say: [Function: say] }
// 类型来自于B
f({age:12,jump(){console.log("say...")}})//{ age: 12, jump: [Function: jump] }

*/

/*----------------------------------------自定义的类型保护
interface Dog{
    age:number
}
interface Pig{
    age:number
}

// 函数参数类型为Dog或者Pig  返回值类型却是x is Dog
// 相当于当年龄为2时，会返回true,那么x is Dog判断为真，它与不定义返回值是一样的
// function isDog(x:Dog|Pig):x is Dog{
function isDog(x:Dog|Pig){
    // console.log("is Dog")
    return x.age == 2//结果返回true 或false
}
function getAnimal(x:Dog|Pig){
    if(isDog(x)){
        return "dog..."
    }else{
        return "pig..."
    }
}
// 定义参数类型属于Dog
let d:Dog = {age:100}
let p:Pig = {age:2}
// 传递给函数的参数类型属于Dog
console.log(getAnimal(d))//age=100时，pig...
console.log(getAnimal(p))//age=2时，dog...
*/
