/* -----------------------------------类型兼容性概念
// 类型：number,string,boolean,array,never,any,void,null,undefined,tuple,enum
// 兼容性判断：
// 1，当赋给变量的内容比它实际需要的变量内容要多，且需要的都存在时，会兼容
// 2，而当它实际需要的内容在赋值的内容中又不存在的，则不兼容
// 3，所谓的兼容性就是指传递的类型属性范围可以比需要的类型属性范围大，此时会兼容，但不能比且小，若有需要的类型属性不存在，那么不兼容。
// ----------------------------------属性刚好符合
interface Named{
    name:string
}
class Person{
    name:string
}
let p:Named;
p = new Person()
console.log(p) //Person {}

// ------------------------------------需要的在赋值中有不存在的
interface Named{
    name:string,
    age:number
}
class Person{
    name:string
}
let p:Named;
p = new Person()//不存在需要的变量属性，会有错
console.log(p) 


// --------------------------------需要的少于赋值的
interface Named{
    name:string,
   
}
class Person{
    name:string
    age:number
}
let p:Named;
p = new Person()//虽然后来赋值内容更多一些，但需要的内容存在，也会兼容
console.log(p) 
*/


/* ---------------------------------------------接口兼容性
// 结论：所需要的类型属性需要在赋值的类型中都存在，而在赋值的类型中，可能会存在不需要的属性，那也是会兼容的
//  但需要的类型属性若是在赋值的类型中不存在时，不会兼容，会出错
interface Animal {
    name:string
    age:number
}

interface People {
   name:string,
   age:number
}

// 函数中参数类型属于Animal,结果返回参数中对象的name
function getAnimalName(animal:Animal){
   return animal.name
}
// 定义变量p类型是People,将其作为参数给上面函数，会兼容
// 兼容是因为Animal接口与People接口中属性相符合
let p:People = {name:"tanni",age:12}
let res = getAnimalName(p);
console.log(res)
*/


/* ----------------------------------------------基本类型的兼容性
// 1，解析：n变量类型可以是字符串或者数值，而k变量仅仅是字符串，包含于n，所以会出现兼容
let n:string |number;
let k:string ="hello";
n= k  //发生兼容
// 2，解析：与上相反的，k的类型更广泛些，将广泛的类型变量k赋给不太广泛的类型变量n，不兼容
let n:string
let k:string|number
k = 124
n = k

*/

/* ------------------------------------类的兼容性
// 类的兼容性：通过看变量需要的类的类型属性，与提供的类的类型属性多少进行判断
// 当提供的多于或正符合需要的类的类型属性，那么兼容，否则不兼容

// 1，父子继承：
// 对于继承的父子类来说，需要的是父类，而提供的是子类，那么肯定兼容
class Animal {
    name:string
}
class Dog extends Animal{
    age:number
}
let a:Animal;
a= new Dog()//正符合  兼容


// 2，普通两个类：
// 提供的类型属性里面不满足需要的
class Animal {
    name:string
}
class Demo{
    age:number
    address:string
}
let a:Animal;
a= new Demo()//不满足需要的类型属性  不兼容

*/

/* ----------------------------------------------------函数兼容
函数兼容分两部分：函数参数列表兼容性与返回值兼容性

// --------------------------------------函数形参兼容性：

// 1，赋值提供的形参少ok，多不OK --->看的是形参个数符合与否
// 1）正符合要求
function f(a:number,b:number):number{
  return a+b
}
// 利用type规定函数类型 参数为number，返回值也是number类型
type MyFun = (a:number,b:number)=>number
let g:MyFun
g = f//函数f的参数和返回值类型全部满足定义好的type类型

// 2）type中形参数量多于提供的形参时，兼容OK
function f(a:number,b:number):number{
    return a+b
  }
  type MyFun = (a:number,b:number,c:number)=>number
  let g:MyFun
  g = f

// 3）type中形参数量少于提供的形参时，不兼容，也就不OK
function f(a:number,b:number,c:number):number{
    return a+b
  }
  type MyFun = (a:number,b:number)=>number
  let g:MyFun
  g = f

// 2，函数形参类型兼容性  
// 只要提供的类型中存在type定义好的类型变量，单个存在ok，同时|也ok--->兼容
// 不可不存在，也不可以其他type中不存在的类型一块存在--->不兼容
// 1）提供的形参类型包含在满足type定义好的类型变量中，兼容
type GFun = (a:number|string)=>void
let g:GFun;
// 函数f形参类型与返回值类型都满足type规定的类型属性
function f(a:number){
    console.log(a)
}
g = f//函数f包含在g变量中


// 2）当提供的类型较多时，出现的情况
type GFun = (a:number|string)=>void
let g:GFun;
// 函数f形参类型与返回值类型都满足type规定的类型属性
// function f(a:number|string|boolean){/兼容
// function f(a:number|boolean){//不兼容
// function f(a:string|boolean){//不兼容
// function f(a:boolean){//不兼容
// function f(a:number|string){//兼容
// function f(a:number){//兼容
function f(a:string){//兼容
    console.log(a)
}
g = f//函数f包含在g变量中


// ---------------------------------------------函数返回值兼容性：
// 1，函数返回值与定义的type返回值类型一致  兼容
// {}当成是对象，函数返回值类型是对象
type GFun = ()=>{name:string,age:number}
let g:GFun;
function f(){
    return {name:"tanni",age:12}
}
g = f;//函数f返回值与g变量(定义好的type)类型一致

// 2，提供的函数返回值类型个数比type定义好的函数返回值个数多  兼容
type GFun = ()=>{name:string,age:number}
let g:GFun;
function f(){
    return {name:"tanni",age:12,address:"zhengzhou"}
}
g = f;

// 3，提供的函数返回值类型个数比type定义好的函数返回值个数少  不兼容
type GFun = ()=>{name:string,age:number,address:string}
let g:GFun;
function f(){
    return {name:"tanni",age:12}
}
g = f;

*/

/* -------------------------------------泛型的兼容性
// 1，定义泛型接口，还给变量赋值
interface Demo<T>{
    name:T
}
// 在定义变量时规定泛型数据类型
let x:Demo<string> = {name:"tanni"}
let y:Demo<number> = {name:12}
x=y//肯定不兼容，因为一个是number类型，一个是string类型的

// 2，定义泛型接口，只给变量规定类型
interface Demo<T>{
    name:T
}
// 仅仅声明x,y的类型
let x:Demo<string>;
let y:Demo<number>;
x=y//不兼容

// 3，定义的接口为空，不存在属性
interface Demo<T>{
}
// 仅仅声明x,y的类型  
// let x:Demo<string>;
// let y:Demo<number>;

// 声明类型还赋值
let x:Demo<string> = {name:"tanni"};
let y:Demo<number>={name:12};
x=y //兼容

*/

/* ---------------------------------------枚举的兼容性
enum Colors{
    RED,
    BLUE,
    GREEN
}
let c:Colors;
c = 123
console.log(c)//兼容

// ------------------------------------------
enum Colors{
    RED,
    BLUE,
    GREEN
}
let c:Colors;
c = Colors.BLUE //想要拿取颜色只能选取Colors中的颜色
console.log(c)//1  

// --------------------------------------------


*/
enum Colors{
    RED,
    BLUE,
    GREEN
}
let n:number;
// Colors.BLUE得到的是其对应的索引值
n = Colors.BLUE;//兼容







