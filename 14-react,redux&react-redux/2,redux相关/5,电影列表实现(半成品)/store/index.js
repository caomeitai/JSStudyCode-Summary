// 引入applyMiddleware，可以将中间件存到该方法中
import { createStore,applyMiddleware  } from "redux"
import reducer from "../reduces/index.js"

// 引入redux-thunk中间件，处理异步action
import thunkMiddleware from "redux-thunk"


// 使用applyMiddleware方法，将使用的中间件扔到这里面  
// 这样代表是将创建的老的store利用中间件进行增强处理。就可以处理异步action
let createStorewithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const state = {
    counter:99,
    films:[]
}


// 创建仓库，需要reducer管理员，另外还可将状态存到仓库
// 通过createStore来创建的仓库
//  let store = createStore(reducer,state)

// 创建带有第三方中间件的仓库 
let store = createStorewithMiddleware(reducer,state)

//  将store导出去
export default store;