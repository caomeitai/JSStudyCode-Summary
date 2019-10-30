// 测试使用...rest运算符将数据给扩展开
// 生成reducer是有使用到的!
let state = {
    name:"tanni",
    age:12,
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "blue" }
}
// let newstate1 = {...state}
// console.log(newstate1)
/* 得到与上面state相同的值，就仅仅是将它们分离开
{ name: 'tanni',
  age: 12,
  title: { text: '标题', color: 'red' },
  content: { text: '内容', color: 'blue' } }
*/

// let newstate2 = {...state,name:"wangcai"}
// console.log(newstate2)
/*后面跟的值会将数据给覆盖掉，得到新的状态
{ name: 'wangcai',
  age: 12,
  title: { text: '标题', color: 'red' },
  content: { text: '内容', color: 'blue' } }
*/

// 预测结果：拿到title中数据，而text中的内容将之前拿到的状态给覆盖掉
let newstate3 = {...state,title:{...state.title,"text":"新标题"}}
console.log(newstate3)
/*
{ name: 'tanni',
  age: 12,
  title: { text: '新标题', color: 'red' },//这样感觉就是后面的数据将前面的值覆盖掉
  content: { text: '内容', color: 'blue' } }
*/