import React, { Component } from 'react'
export default class AsyncAdd extends Component {
    render() {
        return (
            <button onClick={()=>this.props.incrementAsync()}>Async+</button>
        )
    }
}