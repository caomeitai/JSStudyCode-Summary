import React, { Component } from "react"
import PropTypes from "prop-types"

export default class AddTodo extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input type="text" className="new-todo" placeholder="what need to be done?" onKeyUp={this.handleKeyUp.bind(this)}></input>
            </header>
        )
    }
    handleKeyUp(e) {
        let content = e.target.value.trim();
        if (!content) return
        if (e.keyCode === 13) {
            // alert(content)
            this.props.addTodo({ content, complete: false })
            e.target.value = "";
        }
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}