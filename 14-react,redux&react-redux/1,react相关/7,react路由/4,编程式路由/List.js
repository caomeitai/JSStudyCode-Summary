import React from "react"
import {Link} from "react-router-dom"
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>列表页</h1>
                <ul>
                    <li><Link to="/detial/1">第1个商品</Link></li>
                    <li><Link to="/detial/2">第2个商品</Link></li>
                    <li><Link to="/detial/3">第3个商品</Link></li>
                    <li><Link to="/detial/4">第4个商品</Link></li>
                </ul>
            </div>
        )
    }
}