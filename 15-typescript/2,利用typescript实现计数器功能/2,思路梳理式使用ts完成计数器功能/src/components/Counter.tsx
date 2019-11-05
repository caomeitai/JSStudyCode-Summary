import * as  React from "react"
import {connect} from "react-redux"
import { Store } from "../store/statetypes"
import * as actions from "../store/actions/counter"
 
interface Props{
    number:number,
    increment:any
    decrement:any
}

class Counter extends React.Component<Props>{
  render(){
    //   console.log(this.props)
    let {number,increment,decrement} = this.props
      return(
          <div>
              <h1>{number}</h1>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
              {/* <h1>{this.props.number}</h1>
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.decrement}>-</button> */}
          </div>
      )
  }
}
let mapStateToProps = function(state:Store):Store{
  return state;
}
export default connect(mapStateToProps,actions)(Counter);