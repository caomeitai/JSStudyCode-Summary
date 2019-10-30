import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import actions from "../store/actions/counter2"
import { connect } from "react-redux"//将react与redux连接到一起
class Counter2 extends Component {
    render() {
        // console.log(this.props)//{number: 2, increment: ƒ, decrement: ƒ}
        return (
            <div>
                <h1>Counter2</h1>
                <h1>{this.props.number}</h1>
                <button onClick={() => this.props.increment(2)}>+</button>
                <button onClick={() => this.props.decrement(2)}>-</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { number: state.counter2.number }
}



// 第二种方法：mapDispatchToProps方法不再封装，直接利用actions


export default connect(mapStateToProps, actions)(Counter2)