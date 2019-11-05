import * as React from "react"
import {connect} from "react-redux"
import {Store} from "../store/types"
import * as actions from "../store/actions/counter"
 

// 与js中不同，需要定义接收数据类型，因为映射除了状态还有方法
export interface Props{
    number:number
    increment:any
    decrement:any
}



class Counter extends React.Component<Props>{
   render(){
       // console.log(this.props)//{number: 0}
       const {number,increment,decrement} = this.props//将状态方法从this.props中解构出来
       return(
           <div>
               {/* 需要给接收的数据规定类型 */}
               {/* <h1>{this.props.number}</h1> */}
               <h1>{number}</h1>
               <button onClick={increment}>+</button>
               <button onClick={decrement}>-</button>
           </div>
       )
   }
}


// 映射状态，参数是传递的状态，返回状态
let mapStatetoProps = function(state:Store):Store{
    return state
}
// 这里actions指的是actioncreator
export default connect(mapStatetoProps,actions)(Counter);

// 与js中不同，tsx中文件需要给接收的数据规定接口类型Props，从中解构出数据，直接使用。











