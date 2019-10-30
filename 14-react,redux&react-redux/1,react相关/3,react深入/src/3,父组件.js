import React,{Component} from "react"
import Children from "./3,子组件"

// 实现父子间通信
// 1，在react中导入组件在jsx中像在vue那样使用组件；在vue中导入组件是在template中使用
// 2，在react中每个组件都有state，也可以使用props；这与vue是一致的
// 3，vue中props是用来传递数据的，实现父子通信，用来接收父中传递过来的数据
// react中props也可用来传递数据，实现父子通信；它既可以传递数据，也可以传递方法
// 4，在react中如何使用props？
// 答：先存在父子组件；在父中设置数据，在子中获取数据（通过this.props.属性名）

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
         return(
           <div>
               <h1>父组件</h1>
               {/* 传递数据通过属性传给子元素；子元素通过props接收 */}
               <Children age="12"></Children>
            </div>
         )
     }
 }
export default App;