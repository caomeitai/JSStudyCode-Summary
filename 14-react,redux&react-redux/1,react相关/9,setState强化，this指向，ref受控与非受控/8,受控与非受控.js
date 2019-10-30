import React, { Component } from 'react'
import ReactDOM from "react-dom"

// 表单元素的受控与非受控，受react控制
// 我们是操作了真实dom,通过ref得到dom，然后根据dom得到dom内容

// 非受控就是可以随意输入内容，受控则不可以

// 将非受控转为受控，将框中的值作为状态，交给react来控制
class Counter extends Component {
    constructor(props) {
        super(props)
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.res = React.createRef();
        this.state = {
            num1: 10,
            num2: 20,
        }
    }
    handleChange = (event) => {
        console.log(event.target)
        console.log(event.target.dataset.name)
        this.setState({
            // 拿到input框中的值要求h5属性，给每个框加上data-name属性
            //通过dataset拿到name属性  这样就可拿到num1或者num2了
            // event.target.value的值类型是字符串，需要进行转换
            [event.target.dataset.name]: parseFloat(event.target.value)
        })
    }
    render() {
        return (
            <div>
                {/* input框中的内容等于定义好的状态，从而受到react控制 */}
                {/* 会报错，加上readonly,或者onchange事件 */}
                {/* <input type="text" ref={this.num1} value={this.state.num1} readOnly />+<input type="text" ref={this.num2} value={this.state.num2} readOnly /><button>=</button><input type="text"ref={this.res}/> */}
                <input ref={this.num1} data-name="num1" value={this.state.num1} onChange={this.handleChange} />+
                <input ref={this.num2} data-name="num2" value={this.state.num2} onChange={this.handleChange} />
                <button onClick={this.add}>=</button>
                {/*最后一个框是结果，只读就OK */}
                <input ref={this.res} readOnly value={this.state.num1+this.state.num2} />
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, window.app)