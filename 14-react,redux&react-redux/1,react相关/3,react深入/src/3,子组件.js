import React from "react"

// 1，子组件接收数据后，能否改变数据？
// 答：vue中接收后可以改变，但是不推荐；react中是不可以
// 1）vue中数据源：data props。data是每一个组件都有的；props是别人传递的数据
//  props是别人传递的，人家不建议你去修改数据；但如果你要经常修改数据，可以把数据定义到data中
// 2）react中的数据源也是有两个：state  props  它虽然接收过来了，但是不可改变
// 尽量使用props  在react中获取数据推荐在上层组件中获取，然后传递给子组件，子组件通过this.props接收使用

export default class Children extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>子组件</h1>
                {/* 子组件是通过props来接收的 */}
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}
//2，state  vs  props ?
// 答：state是组件内部定义的数据；而props是别人传递的数据  
// 1）state在组件内部初始化，自身可以修改数据（this.setState），别人是不能修改，
// 但可以把state当前局部的，是只能被自身使用的数据源，当state改变，需要组件重新渲染
// 2）props主要是父传给子的数据 ，在react中子中是没有办法修改props接收过来的数据 
// 如果要修改一个别人传递过来的一个props，只能再让别人重新传递过来一个新的Porps
// 3）react建议尽可能少的使用state，尽可能多的使用props 

// 3，react组件分类
// 答：根据state把组件分成两类：有状态组件（有state）和无状态组件（无state）
// 其中有状态组件通常使用class来定义；而无状态组件通常使用function函数来定义
