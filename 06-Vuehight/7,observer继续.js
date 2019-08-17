let obj = {
    name:"tanni",
    age:{
        age:18
    }
}
let arr = ['push','slice','shifit','unshifit']
arr.forEach(method=>{
    let oldPush = Array.prototype[method];
    Array.prototype[method] = function(value){
        console.log('数据更新啦')
        oldPush.call(this,value);
    }
})
function observer(obj){
    if(typeof obj =="object"){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj,key,value){
    observer(value);//判断value是不是一个对象，如果是一个对象，就继续监控
    Object.defineProperty(obj,key,{
        get(){
            // 获取数据
            console.log("获取到数据啦！！！")
            // console.log(value)
            return value
        },
        set(val){
            observer(val);
            console.log("数据更新了");
            value = val
            // console.log(val);

        }
    })
}
observer(obj);//当观测下面存在数据的获取与改变时才会调用observer函数
// 数组调用push是无效的  Object.defineProperty不支持数组的
// obj.age = [1,2,3,4];//更新数据,仅仅执触发执行了一次
// obj.age.push(5);//不支持数组指的是不支持数组值的改变，仅仅有获取数据

// vue将数组中的方法全部推到原型上重写
// obj.age = [1,2,3,4];//更新数据，调用好几次
// obj.age.push(5);//不支持数组指的是不支持数组值的改变，仅仅有获取数据
obj.age = [1,2,3]
// obj.age.length--;//数组不能通过长度修改，也不能通过数组的索引进行修改