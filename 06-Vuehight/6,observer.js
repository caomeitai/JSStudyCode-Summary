let obj = {
    name:"tanni",
    age:{
        age:18
    }
}
function observer(obj){
    if(typeof obj =="object"){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj,key,value){
    observer(value);//判断value是不是一个对象，如果是一个对象，就继续监控
    // 详细设置对象，这里只写获取数据，更新数据的方法
    Object.defineProperty(obj,key,{
        get(){
            // 获取数据
            console.log("获取到数据啦！！！")
            console.log(value)
            return value
        },
        set(val){
            // 设置数据
            // 当设置的数据是一个对象形式的话，需要对这个对象进行监控
            observer(val);
            console.log("数据更新了");
            value = val
            console.log(val);

        }
    })
}
// console.log(obj.name);//仅仅是调用函数而没有调用里面的方法
observer(obj);//当观测下面存在数据的获取与改变时才会调用observer函数
// console.log(obj.name)//数据的获取
// obj.name = "jintan";//设置数据，数据更新

// 数据是一个对象但并未进行继续监测时
// obj.age.age = 100;  //调用一次获取数据，没有调用更新数据函数
// console.log(obj.age)  //调用一次获取数据，打印出{age：18}
// console.log(obj.age.age)  //调用一次获取数据，打印出18

// 原本数据是一个对象时解决方法
// obj.age.age = 100;  //调用一次获取数据，调用一次更新数据函数，最终获得100的数值
// console.log(obj.age)  //调用一次获取数据，打印出{age：[Getter/Setter]}
// console.log(obj.age.age) //会调用两次获取数据，从而得到18

// 给age新赋一个对象
obj.age = {
    a:1
}  //数据更新啦  {a:1}
obj.age.a=2;//只是去获取拿数据，而没完成真正的数据更新,解决后获得数值2


