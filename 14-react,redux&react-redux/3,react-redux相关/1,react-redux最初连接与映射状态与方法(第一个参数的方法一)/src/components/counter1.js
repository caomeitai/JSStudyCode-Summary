import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import actions from "../store/actions/counter1"
import { connect } from "react-redux"//将react与redux连接到一起
class Counter1 extends Component {
    render() {
        // 这里组件中的属性全部都是仓库中数据映射回来的
        // console.log(this.props)//{number: 1, increment: ƒ, decrement: ƒ}
        return (
            <div>
                <h1>Counter1</h1>
                <h1>{this.props.number}</h1>
                {/* store.dispatch(actionCreator) dispatch方法也被映射到组件 
                   这是第一种dispatch与action合并之后的调用 */}
                <button onClick={() => this.props.increment(1)}>+</button>
                <button onClick={() => this.props.decrement(1)}>-</button>
            </div>
        )
    }
}
// state就是仓库中的状态
function mapStateToProps(state) {
    // 将仓库中的属性传递给组件
    return { number: state.counter1.number }
}

// 简化代码1：函数表达式
// let  mapStateToProps = function(state) {
//     return { number: state.counter1.number }
// }

// 简化代码2：返回值为对象，实用小括号包一下
// let  mapStateToProps =state=>({ number: state.counter1.number })


// 第一种方法：
function mapDispatchToProps(dispatch) {
    // 本质仍是将dispatch与actions结合，简化代码
    return bindActionCreators(actions, dispatch)
}

// 简化代码1：函数表达式
// let mapDispatchToProps =function(dispatch) {
//     return bindActionCreators(actions, dispatch)
// }

// 简化代码2：箭头函数
// let mapDispatchToProps =dispatch=>bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter1)