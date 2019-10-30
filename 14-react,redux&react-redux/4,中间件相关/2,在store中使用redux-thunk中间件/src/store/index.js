// 引入自己的redux
import  {createStore}  from "../redux";
// 引入生成的reducer
import reducer from "./reducers"
// 引入中间件
import reduxThunk from "redux-thunk"
import { applyMiddleware } from "redux";

// 第一个()中是要使用的中间件，第二个()中存放的是原本的旧仓库
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)


// 创建仓库  这样就有带有中间件的仓库
let store = createStoreWithMiddleware(reducer);

export default store;




// 中间件使用：在store中利用applyMiddleware，它是对仓库的增强所以需要在这里引入