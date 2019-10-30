import React from "react"
import ReactDOM from "react-dom"

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
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
                <div>{this.state.date.toString()}</div>
                <C></C>
            </div>
        )
    }
}

// 函数组件避免资源浪费，只要不改变状态就不再渲染
function Child(){
    console.log("子组件的render")
    return(
        <div>子组件</div>
    )
}
let C = React.memo(Child)
ReactDOM.render(<News></News>, document.getElementById("app"))