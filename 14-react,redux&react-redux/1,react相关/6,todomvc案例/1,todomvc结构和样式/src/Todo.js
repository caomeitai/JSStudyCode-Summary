import React from "react"

class Todo extends React.Component{
    render(){
        return(
            <li className="todo">
                <div className="view">
                    <input type="checkbox"/>
                    <label>金泰亨</label>
                    <button className="destroy"></button>
                    <input type="text" ref="ipt" style={{"display":"none"}}  className="edit"/>
                </div>
            </li>
        )
    }
}
export default Todo;