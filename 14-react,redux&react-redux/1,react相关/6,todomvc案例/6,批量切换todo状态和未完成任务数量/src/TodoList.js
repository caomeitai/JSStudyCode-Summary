import React from "react"
import Todo from "./Todo"
import PropTypes from "prop-types"

class TodoList extends React.Component {
    render() {
        return (
            <section className="main">
                {/* e.target.checked可以获得true或false是否被选中啦的值传递给该函数 */}
                <input type="checkbox" checked={this.props.allChecked} className="toggle-all" onChange={(e)=>{this.props.toggleAll(e.target.checked)}}></input>
                <ul className="todo-list">
                    {this.props.todos.map((todo, index) =>
                        <Todo toggleTodo={this.props.toggleTodo} delectTodo={this.props.delectTodo} todo={todo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}

// 校验传递过来的todos
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    delectTodo: PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
    toggleAll:PropTypes.func.isRequired,
    allChecked:PropTypes.bool.isRequired,//它的函数返回值为true或false
}

export default TodoList;








