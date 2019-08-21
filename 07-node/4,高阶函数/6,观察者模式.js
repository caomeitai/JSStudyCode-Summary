// // 被观察者
// class Subject{
// // 被观察者中存放着观察者的数据
//     constructor(){
//         this.arr = []//存储观察者是谁
//         // 被观察者默认状态
//         this.state = "很开心"
//     }
//     // 将观察者的数据得到，推进到定义的数组中
//     attach(o){
//         this.arr.push(o)
//     }
//     // 改变了被观察者的状态，改变完状态后，告诉观察者，观察者又存放在被观察者中，遍历
//     setState(newState){
//       this.state = newState;
//       this.arr.forEach(o=>o.update(newState))
//     }
// }
// // 观察者
// class Observer{
//     // 要想得到被观察者状态
//     // 这里进行的初始化仅仅是为了接收到被观察者的相关内容而已
// constructor(name){
//     // this.name = name;
//     this.tani = name;
// }
// update(newState){
//     // console.log(this.name, "小宝宝状态",newState)
//     console.log(this.tani, "小宝宝状态",newState)
// }
  
// }
// // 观察者与被观察者都是类，创建对象时都要求new一下
// let s = new Subject("小宝宝")
// let o1 = new Observer("我")
// let o2 = new Observer("我媳妇")
// s.attach(o1)  //将观察者存放到被观察者中
// s.attach(o2)
// // console.log(s.state)  //最初始被观察者的状态
// s.setState("不开心")




// 练习代码
class Subject{
  constructor(){
      this.arr = [];
      this.state ="很开心"
  }
  attach(o){
      this.arr.push(o)
  }
  setState(newState){
  this.state = newState;
  this.arr.forEach(o=>o.update(newState))
  }
 
}
class Observer{
  constructor(name){
      this.name = name
  }
  update(newState){
      console.log( this.name, "小宝宝状态",newState)
  }
}
let s = new Subject("小宝宝")
let o1 = new Observer("我")
let o2 = new Observer("我媳妇")
s.attach(o1);
s.attach(o2);
// console.log(s.state)
s.setState("不开心")
console.log(s.state)//得到改变状态后的结果


















































































