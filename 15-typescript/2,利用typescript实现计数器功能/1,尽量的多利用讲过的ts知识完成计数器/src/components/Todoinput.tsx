import * as React from "react"

// ---------------------------------------定义好相关的参数类型
// 限制的是默认参数类型
interface Props{
    number?:number//默认属性，是可选参数；传不传都无所谓
}
// 限制state状态的类型
interface State{
    value:string
}
// -----------------------------------------下面使用到类型时，需要<>将其传递下去
class TodoInput extends React.Component<Props,State>{
    static defaultProps:Props = {
        number:0
    }
    state:State = {value:""}
    // 限制事件对象的类型，使用React中的api:ChangeEvent<HTMLInputElement>
    handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            // 改变状态
            value:event.target.value
        })
    }
    render(){
       return(
         // 给input框绑上默认值(初始值)
           <input value={this.state.value} onChange={(event)=>this.handleChange(event)}></input>
       )
   }
} 


export default TodoInput;
// 默认属性，不需要传递就可以得到defaultProps
// 限制默认属性，来定义接口类型来规范它




