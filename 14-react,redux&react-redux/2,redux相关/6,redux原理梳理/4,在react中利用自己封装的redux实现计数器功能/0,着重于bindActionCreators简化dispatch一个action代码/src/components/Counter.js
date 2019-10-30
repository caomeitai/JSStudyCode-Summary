import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
// import { bindActionCreators } from "redux"
import { bindActionCreators } from "../redux"

// 原始的actioncreator
// function increment() {
//     return { type: types.ADD }
// }
// function decrement() {
//     return { type: types.SUB }
// }

// 传递payload的actioncreator  在actioncreator中
function increment(payload) {
    return { type: types.ADD,payload }
}
function decrement(payload) {
    return { type: types.SUB,payload }
}

// increment = bindActionCreators(increment,store.dispatch)
// decrement = bindActionCreators(decrement,store.dispatch)

let actions = { increment, decrement }
actions = bindActionCreators(actions, store.dispatch)
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: store.getState().counter }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
        // this.unsubcribe =  store.subscribe(()=>{
        //     this.setState({
        //         counter:store.getState().counter
        //     })
        // })
    }
    componentWillMount() {
        //   this.unsubcribe();//此时是组件将要卸载时，不再调用render函数
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                {/* 使用自己封装的redux最初始的dispatch一个action是OK的！ */}
                {/* <button onClick={() => store.dispatch(increment())}>+</button>
                <button onClick={() => store.dispatch(decrement())}>-</button> */}
                
                {/* 第一种简化方式 */}
                {/* <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button> */}
                {/* 第二种简化方式：
                     简化代码，利用到bindActionCreators将dispatch和action结合 */}
                {/* <button onClick={() => actions.increment()}>+</button>
                <button onClick={() => actions.decrement()}>-</button> */}

                {/* 传递了payload */}
                <button onClick={() => actions.increment(2)}>+</button>
                <button onClick={() => actions.decrement(2)}>-</button>
            </div>
        )
    }
}