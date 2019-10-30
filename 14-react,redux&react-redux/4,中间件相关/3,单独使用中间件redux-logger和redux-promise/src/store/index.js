import { applyMiddleware,createStore} from "redux";
// 引入生成的reducer
import reducer from "./reducers"
// redux-thunk中间件
// import reduxThunk from "redux-thunk"
// redux-logger中间件
import { createLogger } from 'redux-logger'
const logger = createLogger({});
// redux-promise中间件
// import promiseMiddleware from "redux-promise"

// 之前写法：
// const createStoreWithMiddleware = applyMiddleware(createLogger)(createStore);
// let store = createStoreWithMiddleware(reducer);

// 单独伴随redux-thunk中间件的仓库  处理action是个函数的异步
// 第一个参数是要使用的中间件，第二个参数是旧仓库createStore，第三个参数是仓库需要的管理员reducer
// let store  = applyMiddleware(reduxThunk)(createStore)(reducer)

// 单独伴随redux-logger中间件的仓库 
// 监控状态变化，不断打印出操作时之前状态，动作，之后状态
let store = applyMiddleware(logger)(createStore)(reducer);


// 单独伴随redux-promise中间件的仓库  它可以处理promise所说的异步
// let store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
export default store;
