// import React from "react"
import React,{Component} from "react"

// 类组件class中靠render  必须要return
// render函数渲染一个jsx  html代码中写有js代码

// class继承Component的方法1：
// class App extends React.Component {
//    render(){
//         return(
//           <div><h1>少年终成王</h1></div>
//         )
//     }
// }


// class继承Component的方法2：
class App extends Component {
    render(){
         return(
        //    <div><h1>少年终成王</h1></div>
        //    <><h1>少年终成王</h1></>
           <React.Fragment><h1>少年终成王</h1></React.Fragment>
         )
     }
 }
export default App;