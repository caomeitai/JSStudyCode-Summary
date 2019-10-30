import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
import { bindActionCreators } from "redux"

// action creator  生成action
function increment(payload) {
    return { type: types.ADD1, payload }
}
function decrement(payload) {
    return { type: types.SUB1, payload }
}

let actions = { increment, decrement }
actions = bindActionCreators(actions, store.dispatch)
export default class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = { number: store.getState().counter1.number }
        // console.log(store.getState())//{counter1: {number: 1},counter2: {number: 2}}
        // console.log(this.state)//{number: 1}
    }
    
    // 订阅
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                number: store.getState().counter1.number
            })
        })
    }
    
    // 渲染组件
    render() {
        // console.log(this.state.number)//1
        return (
            <div>
                <h1>Counter1</h1>
                <h1>{this.state.number}</h1>
                <button onClick={() => actions.increment(1)}>+</button>
                <button onClick={() => actions.decrement(1)}>-</button>
            </div>
        )
    }
}