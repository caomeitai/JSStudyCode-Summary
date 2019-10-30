import React, { Component } from 'react'
import actions from "../store/actions/counter2"
import { connect } from "react-redux"
class Counter2 extends Component {
    render() {
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

export default connect(mapStateToProps, actions)(Counter2)