import React, { Component } from 'react'
export default class OddAdd extends Component {
    render() {
        return (
            // 奇数加一按钮
            <button onClick={()=>this.props.incrementIfOdd()}>OddAdd+</button>
        )
    }
}