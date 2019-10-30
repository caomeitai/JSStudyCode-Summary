import React from "react"
import PropTypes from "prop-types"

class Todo extends React.Component{
    render(){
        return(
            <li className="todo">
                <div className="view">
                    {/* 切换状态的事件也写为箭头函数，不用考虑this的问题 */}
                    <input type="checkbox" checked={this.props.todo.complete} onChange={()=>{this.props.toggleTodo(this.props.todo)}}/>
                    <label>{this.props.todo.content}</label>
                    <button className="destroy" onClick ={()=>{
                        this.props.delectTodo(this.props.todo)
                    }}></button>
                    <input type="text" ref="ipt" style={{"display":"none"}}  className="edit"/>
                </div>
            </li>
        )
    }
}

// 校验传递过来的todo
Todo.propTypes = {
    todo:PropTypes.object.isRequired,
    delectTodo:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
}
export default Todo;