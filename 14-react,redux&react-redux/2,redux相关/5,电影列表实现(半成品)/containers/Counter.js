import React from "react"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import * as actions from "../actions/counter"


import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"
import AsyncAdd from "../components/AsyncAdd"
import OddAdd from "../components/OddAdd"

class Counter extends React.Component {
    render() {
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <Add increment={this.props.increment}></Add>
                <Sub decrement={this.props.decrement}></Sub>
                <hr/>
                <AsyncAdd incrementAsync={this.props.incrementAsync}></AsyncAdd>
                {/* 实现奇数时加一操作按钮 */}
                <p><OddAdd incrementIfOdd={this.props.incrementIfOdd}></OddAdd></p>
                
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