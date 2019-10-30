import React, { Component } from 'react'
import ReactDOM from "react-dom"

class News extends Component {
    static defaultProps = { name: "tanni" }//默认属性
    constructor(props) {
        super(props)
        // 创建ref
        this.scrollRef = React.createRef();
    }
    state = {
        // news: ["new1","new2","new3","new4"]
        news: []
    }
    // 组件挂载完毕添加内容，一秒一个
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                // 这里就相当于将内容以这样的形式推到数组中去
                // 将数组展开有重新赋进去啦，就仅仅在数组前添加了数字
                news:[`${this.state.news.length}`,...this.state.news]
            })
        }, 1000);
    }
    // 卸载组件
    componentWillUnmount(){
        clearInterval(this.timer)//清除计时器
    }
    // 生命周期：获取更新之前dom的快照
    getSnapshotBeforeUpdate(){
        // ul随着数据增多而逐渐变大，需要获取ul  ref获取元素
        // console.log(this.scrollRef.current)//获取到ul元素
        
        // console.log(this.scrollRef.current.scrollHeight)//得到滚动的高度
        // 在getSnapshotBeforeUpdate中返回了一个值，这个值会给componedDidUpdate的最后一个参数
        return this.scrollRef.current.scrollHeight;
    }
    componentDidUpdate(prevProps,prevState,lastScrollHeight){
        // lastScrollHeight的值就是上面生命周期返回值
        // console.log(lastScrollHeight)
        // console.log(this.scrollRef.current.scrollTop)//一直为0
        let scrollTop = this.scrollRef.current.scrollTop;
        // this.scrollRef.current.scrollTop = scrollTop+(this.scrollRef.current.scrollHeight)
        this.scrollRef.current.scrollTop = scrollTop+(this.scrollRef.current.scrollHeight-lastScrollHeight)
    }
    render() {
        let styles = {
            height: "100px",
            width: "200px",
            border: "1px solid red",
            overflow: "auto"//没有它的话，内容会自动从容器中出来
        }
        return (
            <ul style={styles} ref={this.scrollRef}>
                {
                    // 遍历数组，渲染出来
                    this.state.news.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        )
    }
}

ReactDOM.render(<News></News>, window.app)