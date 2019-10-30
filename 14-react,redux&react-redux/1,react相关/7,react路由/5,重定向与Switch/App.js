import React from "react"
import { Route, Link, Redirect,Switch } from "react-router-dom"
import Home from "./Home"
import List from "./List"
import User from "./User"
import Detial from "./Detial"
import NotFound from "./NotFound"

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/" >首页</Link>
                    </li>
                    <li>
                        <Link to="/list" >列表页</Link>
                    </li>
                    <li>
                        <Link to="/user" >用户页</Link>
                    </li>
                </ul>
                <Switch>
                    {/* 重定向中存在from to 表示从哪来到哪去   不将其与Switch配合使用无效果*/}
                    <Redirect from="/user" to="/"></Redirect>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/list" component={List}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/detial/:id" exact component={Detial}></Route>
                    {/* 在不写路径的情况下，将会匹配所有路径下的页面 */}
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;