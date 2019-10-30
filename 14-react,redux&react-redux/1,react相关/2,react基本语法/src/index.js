import React from "react"
import ReactDOM from "react-dom"

/* 1，直接渲染字符串到页面
 ReactDOM.render("hello BTS!",document.getElementById("app"))
*/


/* 2，渲染jsx代码到页面
 let ele = <h1>hello BTS!</h1>
 ReactDOM.render(ele,document.getElementById("app"))
*/


/* 3，jsx代码必须只有一个根标签
  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
  let ele = <div></div><h1>hello，金泰亨！</h1>

// 第一种方法：
 let ele = <div><h1>hello，金泰亨！</h1></div>
 ReactDOM.render(ele,document.getElementById("app"))

// 第二种方法：
 let ele = <><h1>hello，金泰亨！</h1></>
 ReactDOM.render(ele,document.getElementById("app"))

// 第三种方法：
 let ele = <React.Fragment><h1>hello，金泰亨！</h1></React.Fragment>
ReactDOM.render(ele,document.getElementById("app"))
*/

/*4，jsx中严格区分大小写，不能够使用大写；所有标签都要关闭；属性必须引号包含
 // 大小写区分 
 let ele = <Div>hello，金泰亨！</Div> //Div is not defined
 ReactDOM.render(ele,document.getElementById("app"))

 //属性引号引起来 
 let ele = <div title="hello">hello，金泰亨！</div> 
 ReactDOM.render(ele,document.getElementById("app"))
 
 */

/* 5，jsx中可存放字面量，变量，运算符表达式，函数调用，jsx
 // 1）字面量
 let ele = <div>hello，金泰亨！</div> 
 let ele = <div>123</div> 
 let ele = <div>true</div> 
 ReactDOM.render(ele,document.getElementById("app"))

//  2）变量
 let name = "tanni"//定义变量
 let ele = <div>{name}</div> //在{}中写js代码，渲染变量
 ReactDOM.render(ele,document.getElementById("app"))

// 3）运算符表达式
let ele = <div>{"wangcai"+ "xiangqiang"}</div> //利用运算符表达式进行字符串拼接
let ele = <div>{1+1+8}</div> //直接计算运算符表达式  10
ReactDOM.render(ele,document.getElementById("app"))

// 4）函数调用，生成随机数
 let ele = <div>{Math.random()}</div> //生成随机数
 ReactDOM.render(ele,document.getElementById("app"))

// 5）jsx代码，除了将内容渲染外还会解析html标签
 let obj = <strong>hello，金泰亨！</strong>
 let ele = <h1>{obj}</h1>
 ReactDOM.render(ele,document.getElementById("app"))
*/

/*6，react中不存在v-if（三元运算符，函数）和v-for（map） react中对js要求更高些
 // v-if分析 
 // 1）三元运算符
 let isLogin = false;
 let LoginOk = <h1>登录OK</h1>
 let LoginNok = <h1>登录不OK</h1>
 let ele = <div>{ isLogin ? LoginOk : LoginNok}</div>
 ReactDOM.render(ele,document.getElementById("app"))

 //2）函数if-else
 let res ="";//定义res
 let isLogin = true;
 if(isLogin){
    res=<h1>登录成功</h1>
 }else{
    res=<h1>登录失败</h1>
 }
 let ele = <div>{res}</div>
 ReactDOM.render(ele,document.getElementById("app"))


 // v-for分析  map属性
 let books = ["vue","css","react"];
 // 在react中绑定key不需要：来绑定
 let ele = <ul>{books.map((book,index)=><li key={index}>{book}</li>)}</ul>  
 ReactDOM.render(ele,document.getElementById("app"))
*/

/*7，特殊属性 class--->className  for--->htmlFor
 // let ele = <div class="box">hello，金泰亨！</div>//Invalid DOM property `class`
 let ele = <div className="box">hello，金泰亨！</div>
 ReactDOM.render(ele,document.getElementById("app"))
*/


// 8，在jsx中放注释  注释也属于js代码，需要放到{}中
// let ele = <div>{/*这里放的是注释 */}</div>
// ReactDOM.render(ele,document.getElementById("app"))

/*9，写行内样式需要写到{}中，需要把样式当成对象，因此在外面会再包一层{}  
 // let ele = <div style="color:red">hello，金泰亨！</div>
 let ele = <div style={{"color":"red"}}>hello，金泰亨！</div>
 ReactDOM.render(ele,document.getElementById("app"))
*/















