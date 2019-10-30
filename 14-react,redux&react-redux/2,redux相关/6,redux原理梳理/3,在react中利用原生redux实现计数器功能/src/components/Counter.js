import React, { Component } from 'react'
import store from "../store"//导入仓库
import * as types from "../store/action-types"
//将actioncreator和dispatch绑在一起
// 以便简化dispatch一个action的代码
import { bindActionCreators } from "redux"

// 声明action creator 生成action
function increment() {
    return { type: types.ADD }
}

function decrement() {
    return { type: types.SUB }
}

// 第一种方法：得到绑定之后的函数，这样在dispatch一个action类型时只需调用该函数即可
// increment = bindActionCreators(increment, store.dispatch);
// decrement = bindActionCreators(decrement, store.dispatch);

// 第二种方法：将上面的action creator放到一个对象中
// actions的返回值可能是一个绑定后的actioncreator,也可能是一个对象，里面放了多个绑定之后的actioncreator
let actions = {increment,decrement}
actions =bindActionCreators(actions,store.dispatch)
export default class App extends Component {
    constructor(props) {
        super(props)
        // 定义组件的状态
        this.state = { counter: store.getState().counter }
    }

    // 在生命周期中调用了订阅函数subscribe方法，完成状态改变后的重新渲染
    componentDidMount() {
        // 原理是重新渲染了render函数
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
                {/* <button onClick={()=>store.dispatch(increment())}>+</button>
                <button onClick={()=>store.dispatch(decrement())}>-</button> */}
                {/* 简化代码 */}
                {/* 方案一： */}
                {/* <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button> */}
                {/* 方案二： */}
                <button onClick={() => actions.increment()}>+</button>
                <button onClick={() => actions.decrement()}>-</button>


            </div>
        )
    }
}