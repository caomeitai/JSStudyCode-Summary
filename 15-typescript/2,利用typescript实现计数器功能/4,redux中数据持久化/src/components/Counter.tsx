import * as React from "react"
import { connect } from "react-redux"
import {Store} from "../store/types"
import * as actions from "../store/actions/counter"

interface Props{
    number:number,
    increment:any,
    decrement:any
}
class Counter extends React.Component<Props>{
    render(){
        return(
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps = function(state:any):Store{
    return state.counter
}
export default connect(mapStateToProps,actions)(Counter)