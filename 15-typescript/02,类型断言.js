"use strict";
// 类型断言
/*
// 默认情况下，编译器会自行判断是那种类型，是否可以使用length,tofixed...
let name:number|string|null;
name="hello"
console.log(name.length) //5
name = 120
console.log(name)//120
console.log(name.toFixed(2))//120.00
// -------------------------------------------------------自动装箱
let x = "hello";
console.log(x);//hello
// .运算符只有对象才会存在，内部会自动推断其类型（自动装箱，包装成对应的类型）
console.log(x.toLocaleUpperCase)//[Function: toLocaleUpperCase]
*/
/*
// 类型断言，我手动告诉编译器它的类型，少了编译器自动推断的过程
// 方法一：利用as
let name:number|string|null
name = "hello"
console.log((name as string).length)//5
// 方法二：利用<>表明其类型
let str:any = "hello"
console.log(<string>str.length)//5 强制告诉编译器它的类型


*/
exports.__esModule = true;
