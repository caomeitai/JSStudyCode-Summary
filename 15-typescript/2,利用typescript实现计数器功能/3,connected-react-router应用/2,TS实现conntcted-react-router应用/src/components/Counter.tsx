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
        // console.log(this.props)
        return(
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}
// 在出现多个reducer时，映射时的reducer是index合并之后的，但需要的是counter
// 也就是说映射的reducer类型不再Store，而是对象里再包的对象才是Store类型
let mapStateToProps = function(state:any):Store{
    // console.log(state)
    return state.counter
}
export default connect(mapStateToProps,actions)(Counter)