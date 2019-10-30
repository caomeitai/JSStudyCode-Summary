/* 1,数值number
let age:number = 120;
console.log(age)
export {}
*/
/* 2,字符串string
let name:string = "tanni";
console.log(name)//tanni
export {}
*/
/*3,布尔值boolean
let isshow:boolean = true;
console.log(isshow)//true
export {}
*/
/* 4,数组array
// 方案一：在元素类型后接上[],表示
// let arr:number[] = ["hello",2,3];// 已报错
let arr:number[] = [1,2,3];
console.log(arr)//[ 1, 2, 3 ]
export {}

// 方案二：跟之前js有点相似又不同
let arr:Array<number> = [1,2,3];
console.log(arr)//[ 1, 2, 3 ]
export {}
*/
/* 5,元组Tuple
let x:[number,string];
x=[12,"tanni"];
x[2]="hello";//有错但能打印出来
// substr只适用于字符串，从start处抽取出相应的字符，形成新的字符串
console.log(x[1].substr(3))//ni
console.log(x[0].toString())//12 对于数值和字符串都是存在toString属性的
console.log(x);//[ 12, 'tanni' ]
*/
/* 6,枚举enum
// 枚举就是先定一个新类型，需要的数据只能从中选择
enum Color{
    yellow=1,
    green,
    red,
    blue
}
// 定义的该变量属于Color类型，值也都来自于该类型中
let color:Color = Color.yellow
// console.log(color)//0--->得到元素编号，它默认从0开始
console.log(color)//1--->手动赋值之后
*/
/* 7,任意数据类型any
// 1）数据是数组形式
let list:any[]=[1,"hello",true]//该数组中存在不同的类型
list[1] = 12;//数据是任意类型，所以在赋值可以任意
console.log(list)

// 2）数据是其它类型
// 因为是任意类型，在赋值时也不存在类型不正确情况，任一种类型都可。
let notsure:any = true;
notsure = "tanni"
notsure = 12
console.log(notsure)
*/
/* 8,void通常作为函数的返回值类型，函数返回void,表示这个函数没有任何返回值
// 1）函数存在返回值且类型为number类型
function sum(num1:number,num2:number):number{
    return num1+num2
}
console.log(sum(1,2))//3

// 2）函数不存在返回值且类型为void类型
function sum(num1:number,num2:number):void{
   console.log( num1+num2)//3
}
console.log(sum(1,2))//函数没有返回值，默认是undefined


*/
/* 9,null和undefined
// 1）null是一种数据类型，这种数据类型对应的值还是null
let a:null = null;
console.log(a)//null

// 2）undefined是一种数据类型，这种数据类型对应的值还是undefined
let a:undefined = undefined;
console.log(a)//undefined

// 3）默认情况下null与undefined是所有类型的子类型
// number,string,array...
let age:number = 100;
age = undefined;
console.log(age)//undefined

let name:string = "wangcai";
let name = "wangcai";
name = undefined;
console.log(name)//虽然有错。但是打印undefined

let abc:null = null;
abc = undefined;
console.log(abc)//undefined

// let abc:undefined = undefined;
let abc:undefined = null;
abc = null;
console.log(abc)//null
*/
/* 10,Never 永远不知道类型的类型就是never类型
// 当一个函数，我们永远都不知道它返回的数据类型，那么就把它的返回值定为never类型
// 如果一个函数抛出错误，那么它的返回值就是一个never
function sum():never{
    throw Error("未知错误")
}
*/
/* 11,给形参指定多种类型 |
function sum(x:number|string){
   if(typeof x==="number"){
       console.log(x)
   }else if(x==="string"){
       console.log(x)
   }else{
       console.log(x)
   }
}
sum(2)//2
sum("tanni")//tanni
sum(true)//有错误，但打印

*/
