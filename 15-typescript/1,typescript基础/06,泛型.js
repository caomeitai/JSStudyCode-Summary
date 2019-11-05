/* --------------------------------------泛型概念
// 泛型：宽泛的类型，就是指没有固定的类型，是什么类型还不确定
// 泛型类：如果一个类中使用泛型，那么这个类就叫泛型
// 要创建数组，但数组中放的数据类型不确定，没有具体类型，可以使用泛型

// 数组类型定义法：
// list:Array<string> = ["z2","l4"]
// list:number[] = [1,2,3]

// ---------------------------------------------泛型实例：
// 规定的类中数组数据类型不确定，使用泛型T
class MyArray<T>{
    list:T[] = [];
    // 函数中要添加的数据类型不确定
    add(ele:T){
        this.list.push(ele)
    }
}
// 在创建数组对象时，规定数据类型为number类型
let arr = new MyArray<number>()
// console.log(arr)// MyArray { list: [] }
// 在上面已规定好数据类型，添加时就只能该类型数据啦！
arr.add(1)
arr.add(2)
// console.log(arr)//MyArray { list: [ 1, 2 ] }


// 在创建数组对象时，规定数据类型为string类型
let arr1 = new MyArray<string>()
// console.log(arr1)//MyArray { list: [] }
arr1.add("tanni")
arr1.add("hello")
// console.log(arr1)//MyArray { list: [ 'tanni', 'hello' ] }

*/
/*--------------------------------------------泛型接口
interface CalIntetface{
    // 约束形参列表和返回值都是number类型
    // (a:number,b:number):number
    // 若是泛型，在形参列表之前提供泛型T
    <T>(a:T,b:T):T
}
// 接口约束函数，参数类型还不确定：泛型
let add:CalIntetface = function<T>(a,b):T{
// let add:CalIntetface = function(a,b){
// let add:CalIntetface = function(a,b){
    return a+b;//3  hellojintan  在函数后规定泛型
    // return a+b;//两个T类型的值是不可相加的，出错但有值
    // return a;//1  hello
}
console.log(add(1,2))
console.log(add("hello","jintan"))
*/
/*-----------------------------------------------多个泛型
// 不利用中间变量来交换两个变量的值
// 普通的多参数函数：
function swap(a:number,b:string){
}
swap(1,"tanni")

// 利用元组交换变量：
// 函数参数类型利用元组定义最初时是A，B类型，在交换之后类型互换B,A
// 元组定义与数组相似，也是[],改变的仅仅是里面的类型可以不同
function swap<A,B>(tuple:[A,B]):[B,A]{
    return [tuple[1],tuple[0]]
}
// 得到元组
console.log(swap([12,"tanni"]))//[ 'tanni', 12 ]

*/
/* -------------------------------------------默认泛型
// 默认泛型就是上来就先给泛型指定一个默认的数据类型 T=xxx
function createArray<T = number>(length:number,value:T):T[]{
    let arr:T[] = []//定义一个泛型数组
    // 这也就默认了数组长度length必须得是number类型
    for(let i=0;i<length;i++){
        arr[i] = value
    }
    return arr//最终结果返回的是泛型数组
}
// 创建的数组长度为3，值为a,类型是字符串
let arr = createArray(3,"a")
let arr1 = createArray(3,2)
console.log(arr)//[ 'a', 'a', 'a' ]
console.log(arr1)//[ 2, 2, 2 ]

*/
/* ----------------------------------------------------泛型继承构造器
// ------------------------------------泛型函数，提供泛型，参数也为泛型
function loger<T>(val:T){
    console.log(val)
}
loger("tanni")
loger(2)
loger(true)

// ------------------------------------------------泛型继承构造器
// 想象构造器是函数，且首字母大写，T extends String 表示最终传递的数据类型都应该是String的子类
function loger<T extends String>(val:T){
  console.log(val)
}
loger("tanni")

*/
/* -------------------------------------------利用泛型接口约束对象
interface Cart<T>{
  list:T[]
}
// 约束对象时规定泛型数据类型为number
let cart:Cart<number> = {list:[1,2,3]}

// ------------------------------------普通接口约束对象
interface Person{
    name:string,
}
// 对象的类型为Person,其中存在name属性，是字符串类型
let p:Person = {name:"tanni"}
*/
/* ---------------------------------泛型别名
// 通过type来定义要规定的类型
type Cart<T> = {list:T[]} | T[]
let c1:Cart<number> = {list:[1,2,3]}
let c2:Cart<string> = {list:["tanni","jintan","niantan"]}
let c3:Cart<number> = [1,2,3,4]
console.log(c1,c2,c3)//{ list: [ 1, 2, 3 ] }  { list: [ 'tanni', 'jintan', 'niantan' ] }   [ 1, 2, 3, 4 ]
*/
