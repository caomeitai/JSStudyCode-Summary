import React from "react"
import ReactDOM from "react-dom"

class News extends React.Component {
    constructor(props) {
        super(props)
        // 定义状态
        this.state = {
            date: new Date()
        }
    }
    // 组件渲染完毕后
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
    render() {
        console.log("父组件的render")
        return (
            <div>
                {/* 将时间转成字符串形式 */}
                <div>{this.state.date.toString()}</div>
                <Child></Child>
            </div>
        )
    }
}
// 如果有父子组件，当父组件render时，子组件也会重新render
// 这样会导致资源浪费，子组件中什么也没有做，也就是状态没改变，不想让它重新渲染

// class Child extends React.Component{

// React.PureComponent 如果一个组件继承了PureComponent，它里面的状态没有发生改变，就不会再次渲染
class Child extends React.PureComponent{
    render(){
        console.log("子组件的render")
        return(
            <div>子组件</div>
        )
    }
}
ReactDOM.render(<News></News>, document.getElementById("app"))