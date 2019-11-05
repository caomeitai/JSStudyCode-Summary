"use strict";
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
exports.__esModule = true;
