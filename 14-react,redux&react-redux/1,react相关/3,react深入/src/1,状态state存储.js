import React,{Component} from "react"
// react中状态靠的是state，每个组件中都存在state，类似于vue中的data
// vue和react一样都是状态改变，视图会更新

// vue中data存放在script标签中，react状态state存放在constructor中
// 要把状态定义到当前组件中，需要通过this；this表示显示的组件
// 想要使用this，需要显示调用super
class App extends Component {
    // 在constructor中仅仅是对状态存储的管理
    constructor(props){
        super(props)
        // 存储状态 this.state
        this.state = {
            name:"tanni"
        }
    }
    render(){
         return(
           <div>
               <h1>少年终成王</h1>
               {/* 使用状态 this.state.属性名 */}
               <h2>{this.state.name}</h2>
            </div>
         )
     }
 }
export default App;