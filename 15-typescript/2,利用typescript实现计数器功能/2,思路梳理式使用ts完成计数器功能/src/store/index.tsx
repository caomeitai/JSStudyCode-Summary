import { createStore } from "redux"
import reducer from "../store/reducers"

// 创建store
let store = createStore(reducer)


// 导出store
export default store;