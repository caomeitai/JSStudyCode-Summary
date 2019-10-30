import React from "react"
import PropTypes from 'prop-types';
// 无状态组件：组件中不存在state状态，数据源是props react建议尽可能的使用无状态组件 
// 特点：
// 1，无状态组件不会被实例化，只能是函数function App(){}性能高
// 2，无状态组件不能访问this
// 3，无状态组件没有生命周期，也就是没有钩子函数
// 4，无状态组件数据源只能靠props

// 传递的数据可以校验，propTypes 

// 最原始的函数组件
// function App(props){
//   return (
//       <div>
//           <h1>无状态组件</h1>
//       </div>
//   )
// }

// 简化箭头函数
const App= props =>(
  <div>
      <h1>无状态组件</h1>
      {/* 无状态组件不存在this */}
      {/* <h2>{this.props.name}</h2> */}

      {/*name="123"时  string*/}
      {/*name={123}时  number */}
      <h2>{props.name}</h2>
      <h2>{console.log(typeof props.name)}</h2>
    </div>
)
 
// 利用propTypes来进行类型校验
App.propTypes = {
    // index.js:1375 Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `App`, expected `string`.
    name:PropTypes.string
}

// 设置默认值为jintan
App.defaultProps = {
    name:"jintan"
}

export default App;