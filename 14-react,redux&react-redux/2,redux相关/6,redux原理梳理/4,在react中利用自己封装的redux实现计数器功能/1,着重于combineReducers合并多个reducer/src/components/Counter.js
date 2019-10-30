import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
import { bindActionCreators } from "../redux"


function increment(payload) {
    return { type: types.ADD, payload }
}
function decrement(payload) {
    return { type: types.SUB, payload }
}

let actions = { increment, decrement }
actions = bindActionCreators(actions, store.dispatch)
export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { number: store.getState().number }
    }
    
    // 订阅
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                number: store.getState().number
            })
        })
    }
    
    // 渲染组件
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => actions.increment(100)}>+</button>
                <button onClick={() => actions.decrement(100)}>-</button>
            </div>
        )
    }
}