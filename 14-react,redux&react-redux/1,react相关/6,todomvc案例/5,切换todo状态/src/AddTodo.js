import React from "react"
import PropType from "prop-types"
class AddTodo extends React.Component{
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input type="text" className="new-todo" placeholder="what needs to be done?"
                onKeyUp={this.handelKeyUp.bind(this)}//该函数是在本组件中定义的
                />
            </header>
        )
    }
    handelKeyUp(e){
        let content = e.target.value.trim()
        if(e.keyCode===13){
            this.props.addTodo({content,complete:false})//添加完数据就立马清空input框中内容
            e.target.value = ""
        }
       

    }
    
}

// 校验添加todo的方法
AddTodo.propTypes = {
    addTodo:PropType.func.isRequired
}
export default AddTodo;