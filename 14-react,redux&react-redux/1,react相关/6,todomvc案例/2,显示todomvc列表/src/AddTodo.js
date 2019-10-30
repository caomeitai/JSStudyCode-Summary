import React from "react"

class AddTodo extends React.Component{
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input type="text" className="new-todo" placeholder="what needs to be done?"/>
            </header>
        )
    }
}
export default AddTodo;