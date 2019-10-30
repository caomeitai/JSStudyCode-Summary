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
                <TodoList todos={this.state.todos}></TodoList>
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
}

export default App;
