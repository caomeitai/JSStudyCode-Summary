import React from "react"
import Todo from "./Todo"
import PropTypes from "prop-types"

class TodoList extends React.Component {
    render() {
        return (
            <section className="main">
                <input type="chekbox" className="toggle-all"></input>
                <ul className="todo-list">
                    {/* props获取数据 使用map进行遍历 */}
                    {this.props.todos.map((todo, index) =>
                        // 将todos中的每一项得到传给Todo
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
    toggleTodo:PropTypes.func.isRequired
}

export default TodoList;