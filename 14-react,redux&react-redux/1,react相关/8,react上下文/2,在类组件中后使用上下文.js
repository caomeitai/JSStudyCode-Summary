import React,{Component} from "react"
import ReactDOM from "react-dom"


// 1，多个组件中使用状态，要把它们放在共同组件中，需要利用react中的api创建一个上下文
// 2，上下文中提供两个api：一个Provider提供上下文，一个Consumer获取数据
// Context.Provider提供数据；Context.Consumer获取数据

// 3，根组件创建上下文，子组件直接从上下文中获取数据
// 4，子组件使用上下文需要给类一个静态属性，值就是这个上下文
let ColorContext = React.createContext();


class Wrapper extends Component {
    state={color:"red"}
    changColor = (color)=>{
        this.setState({color})
    }
    render() {
        // 将状态值都以对象形式存储为上下文值
        let contextValue = {color:this.state.color,changeColor:this.changColor}
        return (
            // 就是利用创建的上下文，给每个组件都提供上下文数值value
            // 跟之前react-redux提供store是一样的概念
            <ColorContext.Provider value={contextValue}>
                <div style={{border:`8px solid ${this.state.color}`,padding:"5px"}}>
                <h1>Wrapper</h1>
                <Header></Header>
                <Main></Main>
            </div>
            </ColorContext.Provider>
        )
    }
}
class Header extends Component {
    //给子组件一个静态属性，值就是context上下文
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`10px solid ${this.context.color}`,padding:"5px",marginBottom:"5px"}}>
                <h2>Header</h2>
                <Title></Title>
            </div>
        )
    }
}
class Title extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`10px solid ${this.context.color}`,padding:"5px"}}>
                <h3>Title</h3>
            </div>
        )
    }
}
class Main extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{border:`10px solid ${this.context.color}`,padding:"5px"}}>
                <h2>Main</h2>
                <Content></Content>
            </div>
        )
    }
}

// 函数组件中使用上下文
// function Main(){
//   return(
//       <ColorContext.Consumer>
//       {
//           value =>(
//               <div style={{border:`10px solid ${value.color}`,padding:"5px"}}>
//                   <h2>Main</h2>
//                   <Content></Content>
//               </div>
//           )
//       }
//       </ColorContext.Consumer>
//   )
// }

class Content extends Component {
    static contextType = ColorContext;
    render() {
        console.log(this.context)//{color: "red", changeColor: ƒ}
        return (
            <div style={{border:`10px solid ${this.context.color}`,padding:"5px"}}>
                <h3>Content</h3>
                {/* onClick函数存在{}与否看有无返回值，有就要将其省略，没有就无所谓啦！ */}
                <button onClick={()=>{this.context.changeColor("blue")}}>变蓝</button>
                <button onClick={()=>{this.context.changeColor("green")}}>变绿</button>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper></Wrapper>, document.getElementById("app"))

