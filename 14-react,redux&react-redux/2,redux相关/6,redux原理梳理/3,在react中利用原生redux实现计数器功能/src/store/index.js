// 引入redux
import  {createStore}  from "redux";
// 引入生成的reducer
import reducer from "./reducers"

// 创建仓库
let store = createStore(reducer);

export default store;