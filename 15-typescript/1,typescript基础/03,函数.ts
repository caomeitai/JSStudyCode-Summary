/* --------------------------js中的函数写法
// 1）函数声明
function add(x,y){
    return x+y;
}
// 2）函数表达式
let myadd = function(x,y){return x+y}
*/


/* ----------------------------ts中函数类型
// 在ts中需要给形参与返回值加上类型
function say(name:string):string{
   return "hello"+name;
}
console.log(say("tanni")) // hello tanni
*/


/* ----------------------------ts中函数基础用法
// 函数表达式  在ts中也是可以写js  vscode默认对ts支持比较好
let say = function(name){
    return "hello "+ name;
}
console.log(say("tanni"))//hello tanni
*/

/*------------------------------函数的可选参数 
// 函数参数传递时，传递参数个数不确定可使用？变为可选参数
function say(name:string,age?:number):void{
     console.log(name,age)
}
say("tanni",12)//不变为可变参数，就是必传参数
say("tanni")//?:变为可变参数时，如果不传参数，就是undefined
*/

/* -----------------------------函数默认参数
function say(name:string="tanni",age:number=12):void{
    console.log(name,age)//不传递参数时会得到默认参数  
}
say();//tanni 12
say("xiaoqiang",100) // xiaoqiang 100
*/


/* -------------------------------函数的剩余参数
// function sum(...numbers):void{
function sum(...numbers:Array<number>):void{
    // 得到的是将其数据展开为数组
    console.log(numbers)//[ 1, 2, 3, 4, 5, 6 ]
}
sum(1,2,3,4,5,6)
*/

/* -----------------------------------------java函数的重载
// 在c#，java中都有函数重载，在java函数中的重载和ts中函数的重载不一样
// java中的重载，表示有多个函数，函数名一样，函数形参却不同（形参个数，形参类型）
// 在java中，函数重载如下：
// 1）函数名一样，形参个数不同
    function say(name:string):void{}
    function say(nmae:string,age:number):void{}
// 2）函数名一样，形参类型不同
    function say(name:string){}
    function say(name:number){}
    say("hello")  say("wangcai",12)//根据函数调用参数，判断是哪个函数被调用
*/

/* -------------------------------------------ts中的函数重载
// 在ts中函数重载仅仅是提供多个函数定义
let obj = {name:"tanni",age:12}
function attr(val:string):void;//仅仅声明定义
function attr(val:number):void;//仅仅声明定义
function attr(val:any){
    if(typeof val==="string"){
        // 传递过来的是字符串就赋给名字
        obj.name=val
    }else if(typeof val==="number"){
        // 传递过来就给了年龄
        obj.age = val
    }
}
attr("jintan")
// console.log(obj)//{ name: 'jintan', age: 12 }
attr(666)
console.log(obj)//{ name: 'jintan', age: 666 }

*/
/* -------------------------------------ts函数类型
// 1）最初始ts函数
let say = function(firstname:string,lastname:string):void{
  console.log(firstname+lastname)//金泰亨
}
say("金","泰亨")

// 2）ts函数类型
// 直接先规定函数类型，在定义时就不再那么麻烦
type MySay =(x:string,y:string)=>string 
let say = function(firstname,lastname){
 return firstname+lastname
}
console.log(say("金","泰亨"))//金泰亨
*/


// 1，js中函数写法（函数声明，函数表达式）；
// 2，ts函数（需要给形参和函数返回值加上类型）；
// 3，ts中函数基础用法：ts中是支持js代码的，vscode默认对ts支持特别好；
// 4，函数的可选参数（不确定参数个数，?:来实现可选参数）
// 5，在定义函数是直接定义参数大小，即为默认参数，传递了参数，就使用传递参数
// 6，利用...运算符将数据展开形成数组，作为参数传给函数
// 7，区分java中函数重载与ts中函数重载的区别与联系
// 8，函数类型直接先规定出来，在函数定义时，不再定义类型


