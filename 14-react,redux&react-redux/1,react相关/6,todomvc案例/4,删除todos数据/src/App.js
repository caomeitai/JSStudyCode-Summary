import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

// 引入样式
import "./styles/todo-mvc.css"

// 1，显示todos数据都存放在App.js中  将数据层层传递App.js-->TodoList.js-->Todo.js
//  每次的传递都需要进行校验 向下传递是：this.state.xxx  接收时是：this.props.xxx
// 2，添加todos也是将其方法放在App.js中向下传递  在react中数据只能从上往下传，不能从下往上传

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos:[
                {content:"看电视",complete:true},
                {content:"打游戏",complete:false},
                {content:"写作业",complete:false}
            ]

        }
    }
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList delectTodo={this.delectTodo.bind(this)} todos={this.state.todos}></TodoList>
                <Footer></Footer>
            </div>
        )
    }
    // 添加todo
    addTodo(todo){
        this.state.todos.push(todo)//将添加内容推到todos中
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除todo
    delectTodo(todo){
        // 如何删除数据？咋找到相应数据？
        //先找到要删除数据对应的索引 t=>t==todo 表示该数据与要删除数据一致
        let index = this.state.todos.findIndex(t=>t==todo)
        this.state.todos.splice(index,1);//利用splice删除该数据
        this.setState({
            todos:this.state.todos
        })
    }
}

export default App;
