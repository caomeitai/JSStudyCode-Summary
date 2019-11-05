import * as React from "react"
import * as ReactDOM from "react-dom"
import { Route,Switch,Redirect } from "react-router-dom"
import {Provider} from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import "./assets/css/common.less"
import Home from "./pages/Home"
import Mine from "./pages/Mine"
import Profile from "./pages/Profile"
import Tabs from "./components/Tab"
// import "./assets/css/common.less"
import history from "./store/history"
import store from "./store"
// 跟antd有关的内容
// 用于全局配置国际化文案
import { ConfigProvider } from "antd"
// 默认文案由英文转成中文
import zh_CN from "antd/lib/locale-provider/zh_CN"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/mine" component={Mine}></Route>
                <Route path="/profile" component={Profile}></Route>
                {/* 重定向，当没有匹配的路径时，不再是404，而是直接重定向为首页 */}
                <Redirect to="/"/>
                </Switch>
                <Tabs></Tabs>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
,document.getElementById("root"))