import React from "react"
import {connect} from "react-redux"
import * as actions from "../store/actions"
class Counter extends React.Component{
  render(){
      console.log(this.props)
      return(
          <div>
              <h1>{this.props.Counter.number}</h1>
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.decrement}>-</button>
              {/* 传递参数需要利用匿名函数 */}
              <button onClick={()=>this.props.goto("/")}>跳到Home</button>
          </div>
      )
  }
}
let mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps,actions)(Counter);