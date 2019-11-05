import * as React from "react"
import * as ReactDOM from "react-dom"
import {Route,Link} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import history from "./store/history"
import { Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  history={history}>
            <>
            <Link to="/counter1">计数器1</Link>
            <Link to="/counter2">计数器2</Link>
            <Route path="/counter1" component={Counter1}></Route>
            <Route path="/counter2" component={Counter2}></Route>
            </>
        </ConnectedRouter>
    </Provider>
,document.getElementById("root"))