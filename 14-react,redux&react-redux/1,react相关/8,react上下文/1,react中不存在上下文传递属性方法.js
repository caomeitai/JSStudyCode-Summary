import React,{Component} from "react"
import ReactDOM from "react-dom"

// 不存在上下文时，父组件传递状态，属性要求从上向下传递，下面子组件利用props进行接收
// 同样的当需要改变状态时，方法也是在父组件中从上往下传递，不过它要注意this的绑定情况，利用props进行接收

//上下文不存在：
 //属性传递：xxx={this.state.xxx}--->{this.props.xxx}      
 //方法传递：yyy={this.state.yyy.bind(this)}--->xxx=(()=>{{this.props.yyy}})    

class Wrapper extends Component {
    state={color:"red"}//定义的组件状态
    changColor = (color)=>{
        // 使用传递过来的状态来改变组件中状态 
        // 第一个color是组件中的状态，第二个color是传递过来的参数将要改变成的状态
        // this.setState({color:color})
        this.setState({color})
    }
    render() {
        return (
            // style书写时第一个{}代表jsx代码，然后要利用到定义好的状态，所以使用反引号
            // 第二个{}表示属性都是对象，需要{}括起来
            <div style={{border:`8px solid ${this.state.color}`,padding:"5px"}}>
                <h1>Wrapper</h1>
                {/* 在没有上下文时只能从上到下传递，且属性传递 */}
                <Header color={this.state.color}></Header>
                <Main color={this.state.color} changColor={this.changColor.bind(this)}></Main>
            </div>
        )
    }
}
class Header extends Component {
    render() {
        return (
            <div style={{border:`10px solid ${this.props.color}`,padding:"5px",marginBottom:"5px"}}>
                <h2>Header</h2>
                {/* 这里也是属性传递 */}
                <Title color={this.props.color}></Title>
            </div>
        )
    }
}
class Title extends Component {
    render() {
        return (
            <div style={{border:`10px solid ${this.props.color}`,padding:"5px"}}>
                <h3>Title</h3>
            </div>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <div style={{border:`10px solid ${this.props.color}`,padding:"5px"}}>
                <h2>Main</h2>
                <Content changColor={this.props.changColor} color={this.props.color}></Content>
            </div>
        )
    }
}
class Content extends Component {
    render() {
        return (
            <div style={{border:`10px solid ${this.props.color}`,padding:"5px"}}>
                <h3>Content</h3>
                <button onClick={()=>{this.props.changColor("blue")}}>变蓝</button>
                <button onClick={()=>{this.props.changColor("green")}}>变绿</button>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper></Wrapper>, document.getElementById("app"))

