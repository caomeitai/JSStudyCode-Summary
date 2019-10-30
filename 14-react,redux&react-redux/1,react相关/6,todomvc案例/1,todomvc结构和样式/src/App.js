import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

// 引入样式
import "./styles/todo-mvc.css"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
