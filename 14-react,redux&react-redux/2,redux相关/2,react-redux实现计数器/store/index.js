// 引入redux，存在一个Redux对象
import { createStore } from "redux"
import reducer from "../reduces/index.js"

// 初始化状态
const state = {
    counter:99
}


//  创建仓库，需要reducer管理员，另外还可将状态存到仓库
 let store = createStore(reducer,state)

//  将store导出去
export default store;