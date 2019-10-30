import React, { Component } from 'react'
export default class App extends Component {
    render() {
        return (
            // 如同其它函数一样，直接传递直接调用即可
            <button onClick={()=>this.props.incrementAsync()}>Async+</button>
        )
    }
}