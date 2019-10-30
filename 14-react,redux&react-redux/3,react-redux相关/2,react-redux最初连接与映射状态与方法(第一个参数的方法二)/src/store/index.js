// 引入自己的redux
import  {createStore}  from "../redux";
// 引入生成的reducer
import reducer from "./reducers"

// 创建仓库
let store = createStore(reducer);

export default store;




// UI组件存在着两个，创建仓库需要的管理员是合并之后的一个reducer
// 每个UI组件都存在一个管理员来管理状态，管理员会返回每个组件的状态数据。
// 通过combineReducers将两个管理员合并成一个，获取状态时需要store.getState().counter1.number
// 通过setState()修改状态，数据状态改变，调用subscribe函数，重新渲染数据