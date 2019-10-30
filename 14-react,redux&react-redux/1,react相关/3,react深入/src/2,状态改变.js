import React,{Component} from "react"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"tanni",
            age:12
        }
        // 在constructor中绑定this到f函数上
        this.f = this.f.bind(this)
        this.f1 = this.f1.bind(this)
    }
    render(){
         return(
           <div>
               {/* 使用状态：状态改变，视图也会更新  状态是如何改变的？ */}
               <h2>{this.state.name}</h2>
               <h2>{this.state.age}</h2>
               {/* jsx中的this仍表示当前类组件class 它可通过.运算符拿到相应数据*/}
               {/* App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …} */}
               {/* <h3>{console.log(this)}</h3> */}

               {/* 状态改变：通过事件  函数也是js代码需要{}括起来 */}
               {/* Expected `onClick` listener to be a function, instead got a value of `string` type */}
               {/* <button onClick="this.f">修改名字</button> */}
               
               {/* 默认情况下this.f表示没有手动绑定this */}
               {/* <button onClick={this.f}>修改名字</button> */}
               
               {/* 1）手动绑定this */}
               {/* <button onClick={this.f.bind(this)}>修改名字</button> */}
               
               {/* 2）不绑定，直接将函数写在jsx中 */}
               {/* <button onClick={()=>{console.log(this)}}>修改名字</button> */}

               {/* 3）另外一种绑定方法 直接绑到constructor中 */}
               <button onClick={this.f}>修改名字</button>
               <button onClick={this.f1}>修改年龄</button>
            </div>
         )
     }
     f(){
        // 此时未绑定this
        // console.log(this)//undefined
        
        // 绑定后 当前组件
        // console.log(this)//App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
       // 真正修改状态只能通过setState   
        this.setState({
         name:"jintan"
       })
     }
     f1(){
        this.setState({
            // age:this.state.age+1
            //this.state.age++  ++在后  this.state.age++代表旧值
            //++this.state.age  ++在前  this.state.age++代表新值
            age:++this.state.age
          })

     }
 }
export default App;