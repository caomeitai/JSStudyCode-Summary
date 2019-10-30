import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component {
    state = { number: 0 }
    handleClick = () => {
        // setState更新state可能是异步的，内部会把多次更新合并成一次
        // this.setState({ number: this.state.number + 1 })
        // this.setState({ number: this.state.number + 3 })
        // this.setState({ number: this.state.number + 5 })
        // console.log(this.state.number)//0-->4 存在多个setState时，最终结果为最后一个操作后的值
        
        // 在上一次setState的基础上改变状态
        // 方案1：第一个参数就是上一次的状态
        // 最后返回只是一个对象，需要使用()将对象包起来，prevState表示改变状态的前一次状态
        // this.setState((prevState)=>{console.log(prevState)})
        // this.setState((prevState)=>({number:prevState.number+1}))
        // this.setState((prevState)=>({number:prevState.number+1}))
        // this.setState((prevState)=>({number:prevState.number+1}))//3,6,9就是在上次结果上进行的状态改变
        
        // 方案2:嵌套,第一个参数是第一次状态改变，第二个参数就是回调函数，可以再次改变状态
        this.setState({nuber:this.state.number+3},()=>{
            this.setState({number:this.state.number+2},()=>{
                this.setState({number:this.state.number+5})
            })
        })

    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter></Counter>, document.getElementById("app"))