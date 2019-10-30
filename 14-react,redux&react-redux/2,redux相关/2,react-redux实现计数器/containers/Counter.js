import React from "react"
// 引入connect方法，连接react无状态组件与redux中的状态
import { connect } from "react-redux"

// 引入它是在映射dispatch方法时使用
import { bindActionCreators } from "redux"

//将定义好的多个actions引进来作为参数传递过来 
import * as actions from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"

class Counter extends React.Component {
    render() {
        // 这样就能拿到之前写的映射过来的属性与方法
        // console.log(this.props)//{counter: 0, increment: ƒ, decrement: ƒ}
        return (
            <div>
                {/* react中的属性传递 */}
                <Show counter={this.props.counter}></Show>
                <Add increment={this.props.increment}></Add>
                <Sub decrement={this.props.decrement}></Sub>
            </div>
        )
    }
}

// 将状态映射成一个组件的属性
// state表示redux仓库中的状态  将其映射成组件的props
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

// 映射操作状态的方法dispatch方法
function mapDispatchToProps(dispatch) {
    // 需要传递actions和dispatch等参数
    return bindActionCreators(actions, dispatch)
}


// 导出的是智能组件，通过connect连接得到的组件
//将组件放到第二个()中就可变成智能组件
// 第一个()中放的是映射方法，将状态映射成组件的属性
export default connect(mapStateToProps,mapDispatchToProps)(Counter);