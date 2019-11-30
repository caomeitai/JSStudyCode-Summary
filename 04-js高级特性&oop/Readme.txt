JS代码的解析与执行？
  解析（预编译）：
语句：
条件语句：if if..else switch
循环语句：选择排序
跳转语句：return 
定义函数方法：函数声明；函数表达式；箭头函数（没有arguments也没this）；new Function() //构造器本质是函数
值传递与引用传递
arguments&rest:rest是指在
数组：我们说的数据类型是变量的值
JS中的变量（变量名）是没有数据类型的

---------------------数组
数组：定义数组 
    一堆操作数组方法
    再讲一堆方法

-------- 数组的扩展：
ES5数组新增方法:
    1，方法与函数有什么区别？
     方法也是函数，只不过写在对象里面的函数叫方法。
    2，方法的分类?
     方法可分成实例方法和类方法。
     实例方法：挂在对象上的方法；如window.alert(),var obj = {init:function(){}}  obj.init()。
     类方法：直接挂在类上的方法（构造器）；如isArray
    3，数组新增方法
       （1）Array.isArray：判断一个数据是否是数组。
           格式：Array.isArray(arr)   通过console.log()来打印出：true 或 flase。
           Array叫做构造器（本质是一个函数）
        其中arguments（收集实参）不是一个真实的数组，长得虽然像数组，但叫伪数组或者类数组；rest参数是一个真实的数组。
       （2）forEach：对数组进行循环。  （一般我们也会用for对数组进行循环，用for会麻烦一些，因为它要用循环变量）
            格式：数组.forEach( function(item,index,arr){
                  //第一个参数 item : 当前的数组元素。相当于arr[index]；	  
                 //第二个参数 index：数组元素的索引；
                //第三个参数 arr 当前的数组。
             }）;
    item,index,arr这叫形参，形参的命名是任意的，但一般我们写的形参要见名知意，这并不影响结果。更重要的是形参的位置顺序。
    注意点：1.形参是一个回调函数；
            2.修改item的值并不影响原数组（这有个前提，这个item的值是基本数据类型，即如果它是引用数据类型，则这个修改会影响原数组）
            3.不能break；
            4.没有返回值；
            5.如果在回调函数中你不需要用到全部的三个参数，你按顺序去省略。
     （3）map： 逐一处理原数组元素，返回一个新数组。这里的map是JS内置的方法
          格式：arr.map( function(item,index ,arr){
              //item : 当前的数组元素。相当于arr[index]
             //arr 当前的数组
            //index：数组元素的索引；
             return
           } );
        模拟map:原来我们使用的arr.map是js内置的方法，如若使用自己写的可以在Array构造器的原型上创建一个方法
        格式：Array.prototype.MyMap = function(f){    
              var newArray = [];
             //处理老数组中的每一个元素，处理完后，把处理后的元素放到newArray
              for(let i=0; i<this.length; i++){
               newArray.push(f(this[i],i,this))
             }
               return newArray;
            }
    易错点：map也存在着修改item的值并不影响原数组。在return语句时，一般是处理谁就返回谁。新数组因为被处理当然会发生变化，所以在打印时要注意时原数组，而非处理过的新数组
         （这有个前提，这个item的值是基本数据类型，即如果它是引用数据类型，则这个修改会影响原数组）
    什么时候要用map：在我们需要对一个数组进行一些加工，但并不想修改原数组，只是希望在原数组基础上，得到一个新数组。
    （4）filter： 逐一过滤原数组元素，留下符合条件的元素得到一个新数组。
      格式：arr.filter( function(item,index ,arr){
          //item : 当前的数组元素。相当于arr[index]
         //index：数组元素的索引；
        //arr 当前的数组
       return 布尔值；//值为真，表示要留下这个数据。
       } );
    （5）reduce： (累加和的感觉)不断地将前一项和后一项的值进行运算（具体规则是由回调函数决定的，每次的运算会涉及两项）,把前一轮运算的结果作为当前运算的前一项。返回最后结果。
       格式：格式1: 不带初始值： 数组.reduce（function（prev，next）{
	                        return   
                               }）
             格式2: 带初始值： 数组.reduce（function（prev，next）{...}，初值）。
                   其中，function中第一个参数prev表示前一项,第二个参数next表示后一项。当然， 你可以改其它的变量名。
                   reduce中的第二个参数代表初始值，也就是说是加数的第一个值

    （6）some： 只要数组中的某一个元素符合指定的条件，就会返回真，否则返回假。
      格式：数组.some（function（value，index，arr）{ 
	    return  ;//
          }）
    （7）every： 数组中的每一个元素符合指定的条件，就会返回真，否则返回假。
     格式：数组.some（function（value，index，arr）{ 
	   return  ;//
         }）

ES6新增方法:                                                           
    （1）Array.from：这个方法是Array构造器的静态方法，将把类数组对象转成真正的数组。
      格式：格式1：Array.from(类数组对象);
            格式2：Array.from(类数组对象,function(item,index){
	           return ;
                })
    （2）Array.of：将一组值转换为数组。与Array.from功能相似，理解用来创建数组。
     格式：Array.of(数值)；
    （3）find：用于找出第一个符合条件的数组元素。找不到则是undefined 。注意，它是不会返回多个，只找一个，找到了就返回。
               如果你要把所有的满足条件的数组元素都找出来，你应该用filter()。
     格式：arr.find(function(item,index){
		return 条件 ;
           })
    （4）findIndex： 返回第一个符合条件的数组元素的索引。找不到则是-1。
      格式：arr.findIndex(function(item,index){
		return 条件 ;
           })
    （5）includes:判断一个元素是否在一个数组中,返回值是true或者false
     格式：arr.includes(要判断的元素值)
    （6）fill：给数组填充指定值。fill方法用于空数组的初始化非常方便。
        已有数据会被覆盖，fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
      格式：格式1：arr.fill(值)
            格式2：arr.fill(值,起点，终点) 包括起点，不包括终点

------------ ES6中的解构赋值
1，什么是解构赋值？
   ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
   作用：是对变量进行赋值；变量的值的来源：是数组或者对象；规则：有一定的模式
2，数组的解构赋值：指的是数组下标位置的对应关系
  （1）按下标一一对应地去赋值：因为两边赋值的数组中数据个数一致，就按照从前往后的顺序依照下标给其赋值 
  （2）左右数量不等：那就要从第一个开始对数组进行赋值，在出现没有数据可以为数组赋值时，那么它就是undefined
  （3）跳过部分 ：就是给那个空格不赋值，逃过它，此处为空。
  （4）默认值：就是给数组添加默认值，要是该位置有数可赋，那么它会被覆盖，要是没有值则会按照默认值输出
  （5）嵌套：就是在赋值时出现数组，那就按照格式去对应即可
3，对象的解构赋值
  （1）按属性名的一一对应关系来进行赋值
  （2）本质-按属性名的一一对应关系来进行赋值
  （3）{}只能放键值对，如果键和值是一样，可以只写一个
  （4）对象是属性的无序集合
  （5）解构规则:必须要通过键名进行关联；没有键名就是undefined；对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
  （6）将现有对象的属性，赋值到某个变量
  （7）沿着原型链进行
  （8）函数参数中的解构赋值
  


  --------------------JS中的对象
1，对象定义：对象是属性的无序集合。{name："tanni";age:100}  name叫键，也叫key  "tanni"叫值，也叫value。
            属性的值可以是任何数据类型（基本数据类型，引用数据类型）
   window对象：
    （1）全局变量都挂在window上，window是一个对象，而window对象的属性直接用.运算符来访问；
    （2）全局函数也会挂在window上，window作为一个对象，全局函数会作为window对象上的方法；
         方法也是函数，只不过写在对象里面（window里面）的函数叫方法。
    （3）可以通过window这个对象来调用的系统定义的方法。
   Dom对象  document文档--->html文档
2，对象分类：
  （1）内置对象：由ECMA实现的，不需要自己实现；
  （2）宿主对象：DOM,BOM;
  （3）自定义对象：程序员自己写的对象。
3，特殊的Global对象：我们定义的全局变量，全局函数是这个对象的属性，而其他的本地对象也是它的属性
      window是Global对象在浏览器端的代言人，换句话说，在浏览器端编写js程序，就直接可以使用window来代替global（它在浏览器端是不存在的）。
     （如果你在你服务器端，在node.js中global对象是真实存在的）。
4，在ECMAScript中:浏览器的JS:没有Global对象；node中的JS:有Global对象
5，三条定律：一切都是对象（数组，函数，对象，变量…..）
             对象是由函数创造
             对象是属性的集合

6，在JS中一切都是对象
  1，基本数据类型是不是对象：
     string基本数据类型:
     （1）但在这里它使用了.length，那么它也就成为了一个对象，它是被瞬间包装成对象的（包装类型对象）
     （2）包装类型对象，不能够直接赋值；当一出现.运算符是就会被包装成对象，又因为在str中并不存在str.XXX，所以结果为undefined，在直接赋值也是一样的原理
     （3）对于str还有很多的方法  str本身是一个基本数据类型，当你调用方法时，它也会包装成对象
     （4）数组和字符串不一样，字符串在调用方法或属性时，会包装成一个对象形成包装类型对象，这个包装是瞬间的。
          数组是一个正经对象，那你就可以给这个对象上面挂属性或方法，并且算是“永久”的
  2，引用类型的数据是对象 
    函数是对象；数组也是对象；对象也是对象；都可以通过instanceof来判断它们是否为对象
7，属性的操作
  1) 访问某个属性
    方式一：对象名.属性
    方式二: 对象名["属性"]。注意：如果属性名被保存在某一个变量，只能使用第二种方式。
注意：又出现一个undefined.
      。变量没有赋初值
      。函数默认返回值
      。访问对象的未定义属性（比较：如果访问一个没有定义的变量，程序会报错）
  2) 给对象添加新属性:
     。通过.运算符来实现属性的添加；对象名.属性名　＝　属性值；
     。通过[]来实现属性的添加，这个必须给每个属性名加上引号；对象名[“属性名”] = 属性值；
     。如果增加同名的属性，会覆盖掉
  3) 修改属性:对象名.属性名= 值；
  4) 删除属性 —深入理解var 与不加var 的区别：  Delete 对象名.属性名
     在删除属性时：对于加var的变量不能被删除，而不加var的变量则被删除属性。
  5) For  in循环遍历对象所有的属性
  6) 获取全部可以枚举的实例属性Object.keys( )
8，属性是有特征的（可精细的设置对象的属性） 
    （1）configurable:是否可以删除。默认为true。
    （2）writable：是否可以修改属性的值。默认为true。
    （3）enumerable：是否可以枚举。是否可以通过for in 循环来输出。默认为true。
    （4）Value:值。默认为undefined
    Object是一个对象，defineProperty是对象上的一个方法
    Object.defineProperty(obj,"name",{
        configurable:false, // 不能删除
        value:"wangcia",  // 默认
        enumerable:false,  // 不能循环
        writable:false, // 不能修改
    })
9，in 和 hasOwnProperty都是用来判断该对象上是否有该属性
   in会去它的原型对象上面去寻找，格式："属性名" in obj
   hasOwnProperty只会在它的对象内部寻找，格式：对象.hasOwnProperty("属性名")
10，对象都是由函数创建的
   （1）数组是由函数创造的：数组是个对象，对象中有一个constructor属性，指向创建这个对象的函数（构造器）
        所有的数组都是通过Array创建的。而Array是构造器，本质为函数，所以说数组是由函数创建的。
   （2）函数由函数创建：在new函数时，即构造器；new Function("x","y","return x+y")
      不同函数的构建都是一样的，都使用Function。
   （3）基本数据类型由函数创建
   （4）对象由函数创建  不同对象创建时使用的函数是一样的，都是构造器Object
11，原型与原型链
   （1）每个函数，都会有很多属性（因为函数也是对象，而对象是属性的集合），其中一定有一个prototype属性。
   （2）每个函数都有一个prototype属性，它的值是一个对象；prototype是key（属性），它的value（属性值）是对象，这个对象叫原型对象
        自定义的函数的prototype属性值：Object
   （3）属性写在函数里，方法挂在原型对象上
   （4）一个原型对象，是一个对象，对象是属性的无序集合，所以它有好多属性和方法，其中肯定有一个叫constructor，constructor指向创建该对象的函数本身
   （5）每个函数上都有一个prototype属性，其值是一个对象叫原型对象，原型对象上有一个constructor属性。
   （6）每一个对象都有一个__proto__属性，它对应的值是一个对象，这个对象叫隐式原型。
   （7）对象的__proto__属性　指向　创建这个对象的函数的prototype
12，谁调用了包含this的方法，那么this就指向谁
    （1）如果this出现在普通的函数（不在对象里面），那么this就是window
    （2）如果this出现在一个对象的方法中，this可能指向这个对象，也可以指向window
    （3）如果在调用函数之前加一个new的话，会创建并返回一个新的对象，而这个函数内部的this就会指向这个对象。
    （4）可以通过Function对象的apply（传递参数时要求使用[]）和call方法来指定函数内部的this的值。
      就是让一个对象去借用一个方法：方法.call(对象)，最终指向obj（对象），在借用完时也就调用完了。
      bind（改变this的指向，bind不会自动调用，返回）
13,因为判断数据类型typeof instanceof 都不太准确，则使用toString ，它是挂在对应函数原型对象上的方法
   格式：Object.prototype.toString()
    





-----------------------------------------------------------------------------------------------------------------------
复习：
1，一切皆对象
2，对象是属性的无序集合
3，对象都是由函数创建的
4，原型与原型链
5，json[{},{},{}]   {name:[]}  后端node  前端调用后端接口  key？
6，this  谁调用了包含this的这个函数，this就指向谁
----------------------------------------------------------------------------------------------------------------
方法也是函数，只不过写在对象{  }里面的函数叫方法。
1,创建对象的多种方法：
  （1）字面量创建对象    不足之处：要一个对象就需要写一个对象
  （2）工厂模式：工厂利用一个函数来模拟，是直接调用函数。   利用工厂，就可以批量地生产对象
  （3）构造器模式  new函数-->变成一个对象
      加了new，那么new究竟做了什么？做了四件事
       1，创建一个对象  let o = new F()   let o = {}
       2，F.call(o)    通过call来修改this的指向
       3，o.__proto__ = F.prototype  使其指向新对象的原型对象上
       4，return o    返回这个对象
  （4）利用构造器优化工厂模式  可以批量生产对象
  （5）构造器+原型  最优化方法
2,继承  不劳而获
  继承属性：Parent.call（this,yourname）
  继承方法：
  共用一份：
    Son.prototype=Parent.prototype,Son.prototype.constructor=Son;
  复制一份：
   for(let i in Parent.prototype){
      Son.prototype[i]=Parent.prototype[i]
   }
   Son.prototype.constructor=Son;


----------------ES6对象的扩展
1，Object.getOwnPropertyDescriptor() 得到某个对象中某个属性的特征
2，Object.defineProperty()   精细化设置一个对象的属性
3，Object.defineProperties()  精细化设置一个对象的多个属性
4，Object.getOwnPropertyNames()  得到对象中自已内部的所有的属性，放到一个数组中
5，Object.keys()  得到对象中所有的属性（包含它自己的和它原型上），放到一个数组中
6，Object.values()  得到对象中所有的属性（包含它自己的和它原型上）的值，放到一个数组中
7，Object.create()  用于对字面量对象实现继承
8，Object.getPrototypeOf()  得到一个对象的原型对象
9，Object.assign()  用于对象的合并
防篡改的方法:
  （1）preventExtensions()：不允许新增，但可以修改，也可以删除
  （2）seal：密封，不允许新增、也不允许删除，但可以修改
  （3）freeze：冰封，不允许新增、不允许删除，不允许修改
Class是ES5中构造器与原型的语法糖
   class直接来创建对象，代替之前的函数：
    在class创建的对象里面都是写的函数，也就是全部都是方法，那么之前在原型上的方法也就直接在这里书写啦！方法与方法之间不使用逗号。
  实例指的是new上的东西
    class 父类{
              constructor(name,age){
                  this.name = name;
                  this.age = age;
              }
              say(){

              }
          }
    class 子类 extends 父类{
        constructor(name,age){
            super(name,age)
        }
    }
我们可以通过new上一个对象来调用方法，还可以通过类来调用方法，如果使用类来调用方法的话，叫静态方法
  静态方法和静态属性就只能类来调用
    class Animal{
      static m = 1;//这里的m并不是变量而只能称之为属性
      //静态方法就仅仅是在其前面加上static，且不能使用实例调用
          static eat(){
              console.log("eat...")
          }
      }
      Animal.eat()
  实例（就是new上的那个对象）不能调用

JS中的异步
    1，进程与线程
    2，JS的主线程是单线程的（一个工人），如果遇见一个比较耗时的任务（异步任务），它会再找一个工人
    3，JS代码分同步任务和异步任务，先执行同步任务，然后执行异步任务
    4，JS代码是同步任务，还是异步任务，不是程序员说了算。也就是说异步任务都是规定好。但是大部分代码都是同步任务。
    5，常见的异步任务有：setTimeout,setInterval,读文件，去服务器请求数据...

读文件  服务端  js    node
  在node端，只能写js,不能写html,css，新建文件都是js文件
  1，以前普通回调函数  
    let fs = require("fs")  // filesystem
    //err表明读取数据失败，data则表示读取数据成功,加上utf-8可将数据转换成正常的数值
    fs.readFile("./out.txt","utf-8",function(err,data){
      //fs.readFile("要读取文件路径","utf-8",function(err,data){}//回调函数)
        if(err){
            console.log(err)
        }
        console.log(data)
    })
  2，使用promise函数，在原来的基础上加上读取文件的函数
    let p = new Promise((resolve,reject)=>{
    fs.readFile("./readfile.txt","utf-8",(err,data)=>{
        if(err){
            resolve(err);
        }
        reject(data);
    })
    p.then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err)
    })
    console.log(p);
  })
  3，需要再读取文件，那么需要将读取文件的操作封装成一个函数,封装成函数的返回值应该是新new的那个Promise函数
   function readFile(filename){
    // 封装成函数的返回值应该是新new的那个Promise函数
    return new Promise(function(reject,resolve){
      fs.readFile(filename,"utf-8",function(err,data){
          if(err){
              resolve(err);
          }
          reject(data);
      })
    })
  }
  readFile("readfile.txt").then(function(res){console.log(res)})
  .catch(function(err){console.log(err)})
异步解决方案：
   （1）回调函数：在解决异步时---->回调地狱
   （2）promise：

Promise:
1，promise是解决异步编程的方法，所谓promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件的结果
   没有异步就不需要promise；promise本身不是异步，而是我们编写异步代码的一种方法
2，promise在ES6中存在一个Promise构造器，这个构造器不需要传递参数，否则会报错。
3，我们可以直接使用new创建一个，它是一个回调函数，有两个参数：resolve,reject；Promise对象默认处于等待态（pending）
4，回调函数中的两个参数，其作用就是用于转换状态：resolve，将状态从pending –> fullFilled；reject，将状态从pending –> rejected
5，既然已知对象已有两种状态，那么获得两种状态的原因(err)或者说终值(res)，那么利用事件机制（注册事件可利用then方法）：
  （1）如果是pending –> fulfiied，就会触发onFulFilled事件
  （2）如果是pendeing –> rejected，就会触发onRejected事件
  4：4大术语
    解决（fulfill）
    拒绝（reject）
    终值（eventual value）
    据因（reason）
  3：3种状态
    等待态（Pending）
    执行态（Fulfilled）
    拒绝态（Rejected）
  2：2种事件
    如果是pending –> fulfiied，就会触发onFulFilled事件
    如果是pendeing –> rejected，就会触发onRejected事件
  1：1个对象
    promise
    
