// -------------------------------ES5中模拟TS中的抽象类
// function Animal(){
//     console.log(new.target);//[Function: Animal]  得到的是new创建实例
//     // 当new上的类是Animal时就会扔出错误
//     if(new.target===Animal){
//         throw Error("我是抽象类，不能new")
//     }
//     this.type = "狗类"
// }
// Animal.prototype.eat=function(){
//     console.log("eat...")
// }
// // 就是Animal是抽象类，不能new
// let a = new Animal()//Error: 我是抽象类，不能new
// console.log(a.type)//狗类

// ------------------------------------继承实例属性
// function Animal(){
// if(new.target===Animal){
//     throw Error("属于抽象类，不能new")
// }
// this.type = "狗类"
// }
// Animal.prototype.eat = function(){
//     console.log("eat...")
// }
// // 继承实例属性
// function Dog(){
//     // this代表的是Dog实例
//     // 利用call谁调用它this就指向谁
//     Animal.call(this)//靠它完成实例属性的继承
// }   
// let dog = new Dog()
// console.log(dog.type)

// let a = new Animal()//Error: 属于抽象类，不能new

// ------------------------------------继承公共属性
function Animal() {
    if (new.target === Animal) {
        throw Error("属于抽象类，不能new")
    }
    this.type = "狗类"
}
Animal.prototype.eat = function(){
    console.log("eat...")
}
function Dog(){
    Animal.call(this)//继承实例属性
}
// 继承共有属性
//1，Animal.prototype 指向Animal，这样会导致Dog的原型对象指向发生变化，它也指向Animal
// Dog.prototype = Animal.prototype 

//2，改善指向
// Dog.prototype.__proto__ = Animal.prototype//继承了共有属性

// 3，setPrototyOf  首参代表要被设置原型的对象  二参指新的原型对象
// 将Animal的原型对象给了Dog这样在Dog上就存在了say方法
// Object.setPrototypeOf(Dog.prototype,Animal.prototype)

// 4，Object.create  创建新的原型对象
Dog.prototype = Object.create(Animal.prototype)

let dog  = new Dog()
console.log(dog.type)//狗类
dog.eat()//eat...

// -----------------------------------小结
// 继承实例属性：Animal.call(Dog)// Dog继承了Animal实例属性
// 继承共有属性：
//   1，Dog.prototype = Animal.prototype  //指向出现问题
//   2，Dog.prototype.__proto__ = Animal.prototype
//   3，Object.setPrototypeOf(Dog.prototype,Animal.prototype)
//   4，Dog.prototype= Object.create(Animal.prototype)












