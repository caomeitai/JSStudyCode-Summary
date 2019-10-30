import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
import { bindActionCreators } from "../redux"


function increment(payload) {
    return { type: types.ADD2, payload }
}
function decrement(payload) {
    return { type: types.SUB2, payload }
}

let actions = { increment, decrement }
actions = bindActionCreators(actions, store.dispatch)
export default class Counter2 extends Component {
    constructor(props) {
        super(props)
        this.state = { number: store.getState().counter2.number }
    }
    
    // 订阅
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                number: store.getState().counter2.number
            })
        })
    }
    
    // 渲染组件
    render() {
        return (
            <div>
                <h1>Counter2</h1>
                <h1>{this.state.number}</h1>
                <button onClick={() => actions.increment(2)}>+</button>
                <button onClick={() => actions.decrement(2)}>-</button>
            </div>
        )
    }
}