import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <section className="main">
                <input type="chekbox" className="toggle-all"></input>
                <ul className="todo-list">
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                </ul>
            </section>
        )
    }
}
export default TodoList;