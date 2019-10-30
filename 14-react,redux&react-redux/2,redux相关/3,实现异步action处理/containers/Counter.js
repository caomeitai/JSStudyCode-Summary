import React from "react"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import * as actions from "../actions/counter"


import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"
// 异步的action
import AsyncAdd from "../components/AsyncAdd"

class Counter extends React.Component {
    render() {
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <Add increment={this.props.increment}></Add>
                <Sub decrement={this.props.decrement}></Sub>
                <hr/>
                {/* 处理异步action时的参数传递函数 */}
                <AsyncAdd incrementAsync={this.props.incrementAsync}></AsyncAdd>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);