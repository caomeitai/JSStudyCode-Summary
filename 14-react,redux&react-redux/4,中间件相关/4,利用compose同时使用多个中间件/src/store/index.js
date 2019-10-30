import { applyMiddleware,createStore,compose} from "redux";
// 引入生成的reducer
import reducer from "./reducers"

// 引入中间件
import reduxThunk from "redux-thunk"// redux-thunk中间件
import { createLogger } from 'redux-logger'// redux-logger中间件
import promiseMiddleware from "redux-promise"// redux-promise中间件
const logger = createLogger({});

// 将中间件放入数组
// 同时使用了多个中间件
let arr = [reduxThunk,logger,promiseMiddleware]
const store = createStore(
    reducer,
    compose(applyMiddleware(...arr))//结合使用中间件
)


export default store;
