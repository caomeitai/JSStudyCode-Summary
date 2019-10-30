import React from "react"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"wangcai"
        }
    }
    render(){
        return(
            <>
                {/* 默认情况下，input框是非受控的 */}
                {/* <input></input> */}

                {/* 先想如何得到input框中的内容 */}
                {/* <input ref="ipt" value="hello" /> */}

                {/* 把一个非受控的，变成受控的 */}
                {/* Change是一个事件 当输入框中的内容改变了，会触发这个事件 */}
                <input value={this.state.username} onChange={this.f1.bind(this)} />
                <h1>{this.state.username}</h1>
            </>
        )
    }
    componentDidMount(){
        // console.log(this.refs.ipt)
        // console.log(this.refs.ipt.value)
    }
    f1(e){
        this.setState({
            username:e.target.value
        })
    }
}
export default App;

// 在开发中，大多数，需要把非受控的组件变成受控的组件
// 如果只想得到表单中的数据，可以操作dom  使用ref获取dom  非受控制