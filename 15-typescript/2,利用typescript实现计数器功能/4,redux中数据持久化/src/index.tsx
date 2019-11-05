import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import Counter from "./components/Counter"
// 将store引进来时是个对象，需要使用.运算符
import obj from "./store"

ReactDOM.render(
    <Provider store={obj.store}>
        <PersistGate persistor={obj.persistor}>
            <Counter></Counter>
        </PersistGate>
    </Provider>
,document.getElementById("root"))

// 实现数据持久化：靠的就是redux-persist  API
// 在Local Storage中存放：
// {router: "{"location":{"pathname":"/","search":"","hash":""},"action":"POP"}", counter: "{"number":3}",…}