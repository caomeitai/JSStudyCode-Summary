import React, { Component } from 'react'
export default class Add extends Component {
    render() {
        return (
            // 利用箭头函数，就不用考虑react中传递参数绑定this的情况啦！
            <button onClick={()=>this.props.increment()}>+</button>
        )
    }
}