/* -------------------------------------类相关知识点
// class是关键字，用来声明一个类
// name属于类中的属性--->规定了属性的类型
// new上一个类就是创建一个对象
class Person{
    name:string
}
// 对象创建是通过new出来的
let p = new Person()
*/

/* ----------------------------------类中的构造函数（构造器）
// 构造函数目的就是传递数据，使得对象中有值
class Stu{
    name:string
    constructor(name){
        // this的指向就是谁new就指向new上的那个对象
        this.name=name;//就是将传递过来的数据给了对象属性
    }
}
//new上类可得到对象，对象上就存在相应的属性，属性值可以通过构造器得到
// 参数传递给了构造器，最终将参数挂在了对象的属性上
let s = new Stu("tanni")
console.log(s.name)//tanni  在没有参数传递时值为undefined
*/

/* ----------------------------------访问权限符 public private  protected 
// public 公共的，所有类的类内类外都可以访问
// private 私有的，只有在本类的类内才可以访问
// protected 受保护的，只有在本类内与子类的内部才可访问

//  ----------------------------------------------------访问器（获取到数据）
class Colors{
    color:string 
    constructor(color){
        this.color = color
    }
}
let C = new Colors("green")
console.log(C.color)//私有属性将无法直接访问


class Colors{
    // 默认私有属性都以_打头
    private _color:string //设置其访问权限为私有的，下面将无法访问
    constructor(color){
        this._color = color
    }
    // 访问器，是个函数，获取到数据
    public get color():string{
        // console.log(this) // Colors { _color: 'green' }
        return this._color;
    }
}

let C = new Colors("green")
// console.log(C.color)//私有属性无法直接访问
console.log(C.color) //这里是调用了访问器的方法，()可以省略

// --------------------------------------------------------修改器（修改数据）
class Colors{
    private _color:string 
    constructor(color){
        this._color = color
    }
    // 访问器
    public get color():string{
        return this._color;
    }
    // 修改器，将参数值赋给对象属性，没有返回值，不用规定返回类型
    public set color(newColor:string){
        this._color = newColor
    }
}
let C = new Colors("green")
console.log(C.color) //获得数据 green
C.color = "red"//修改数据
console.log(C.color) //获得修改后数据 red
*/


/*-------------------------------------类参数传递，构造器，访问器，修改器流程
//1）最普通，不存在参数传递
class Colors{
    color:string
}
let C = new Colors()
console.log(C.color)//undefined


// 2）传参，构造器
class Colors{
    color:string
    // 构造器传参
    constructor(color){
        this.color = color;
    }
}
// 获取传递的参数
let C = new Colors("green")
console.log(C.color)//green

// 3）权限访问，访问器
class Colors{
   private _color:string
    constructor(color){
        this._color = color;
    }
    public get color():string {
        // console.log(this)//Colors { _color: 'green' }
       return this._color
    }
}
// 传递参数
let C = new Colors("green")
console.log(C.color)//green

// 4）修改器
class Colors{
    private _color:string
     constructor(color){
         this._color = color;
     }
     public get color():string {
        return this._color
     }
    //  修改器
     public set color(newcolor:string){
         this._color = newcolor
     }
 }
 // 传递参数
 let C = new Colors("green")
 console.log(C.color)//green
 C.color = "blue"
 console.log(C.color)//blue
*/

/* ---------------------------------------三个修饰符
class Animal{
    public readonly name:string="tanni"
    protected age:number=12
    private money:number=1000
}

// 子类继承父类，数据只要有访问权限就可以得到
class Dog extends Animal{
   public getAge(){
       console.log(this.age)
   }
   public getMon(){
    // 权限访问只能在父类的内部使用
    // console.log(this.money)
   }
}
let d = new Dog();
console.log(d.name)//tanni
// console.log(d.age)//不可在dog类外访问，
console.log(d.getAge())//12  undefined是因为没有返回值

*/
/* ------------------------------------------------------继承
class Animal{
    name:string
    // 构造函数是给类中的属性进行赋值
    constructor(name:string){
        this.name = name
    }
}
class Dog extends Animal{
   age:number
    // 子中的构造器先调用了父中的构造器，
    // 然后给子类属性赋值，同样的它继承了父类的属性
   constructor(name,age){
        // 先调用父中构造器 super
        super(name)
        this.age = age
   }
}
let d = new Dog("tanni",12)
console.log(d.age)//12
console.log(d.name)//tanni
*/


/* ----------------------------------------------------抽象类
//父类又称为基类，它是不需要去new这个类的，将其变为抽象派，通过abstract
// 抽象类就是不能new的类，完全让别的去继承，所以它是不能去创建对象的
abstract class Father {
    name:string
    constructor(name:string){
       this.name = name 
    }
}
// 抽象类是不能new的
// let F = new Father("jintan") 
// console.log(F.name)

class Son extends Father{
    age:number
    constructor(name,age){
        super(name)
        this.age = age
    }
}
let S = new Son("wangcai",23)
console.log(S.name)//wangcai
console.log(S.age)//23
*/

/* -----------------------------静态属性
// 实例属性：
class Animal{
    // 在Animal中声明的属性默认情况下都是实例属性
    public name:string; //实例属性 实例就是对象的意思
    constructor(name:string){
        this.name = name
    }
}
// 此时new上的类是实例，也是对象
let a = new Animal("tanni")
console.log(a.name)

// 实例与静态属性：实例需要通过对象.xxx；静态属性需要类名.xxx。
class Animal{
    public name:string; //实例属性 实例就是对象的意思
    // 静态属性不属于某个实例，属于当前这个类
    static age:number = 666//静态属性
    constructor(name:string){
        this.name = name
    }
}
// 此时new上的类是实例，也是对象
let a = new Animal("tanni")
console.log(a.name)//tanni

// 静态属性需要通过类名来获取
console.log(Animal.age)//666
// console.log(a.age)//不可获取
*/


/* -----------------------------------------静态方法
class Animal{
    // 定义的是静态方法
    static f1(){
        console.log("静态方法...")
    }
}
let a = new Animal()
// a.f1()//静态方法不可这样调用
Animal.f1()//静态方法...

*/




// 总结：
//    1，基本使用
//    2，构造器，用来给类中的属性赋值
//    3，访问器，如果一个类的属性是私有的，外面的不能访问，可以提供一个访问器，可以到达访问类中私有属性的目的
//    4，修改器，去修改类中的某个属性 
//    5，readonly，表示类中这个属性是只读，不能修改
//    6，继承   父类   子类   子类去继承父中的属性和方法
//    7，抽象类    抽象类就是为了让别人继承  不能new 
//    8，静态方法和静态属性   只能类来调用，不能通过对象来调用
//    9，权限修饰符 public  protected   private


















