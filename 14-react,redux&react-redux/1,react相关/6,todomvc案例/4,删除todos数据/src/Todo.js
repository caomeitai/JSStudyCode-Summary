import React from "react"
import PropTypes from "prop-types"

class Todo extends React.Component{
    render(){
        return(
            <li className="todo">
                <div className="view">
                    <input type="checkbox" checked={this.props.todo.complete}/>
                    <label>{this.props.todo.content}</label>
                    <button className="destroy" onClick={()=>{
                        // 删除的点击事件就直接在这里面写  this.props.delectTodo(this.props.todo)//要删除的todo传递过去
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
    delectTodo:PropTypes.func.isRequired
}
export default Todo;