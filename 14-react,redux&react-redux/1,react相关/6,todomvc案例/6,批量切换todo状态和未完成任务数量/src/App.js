import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

// 引入样式
import "./styles/todo-mvc.css"

// 1，显示todos数据都存放在App.js中  将数据层层传递App.js-->TodoList.js-->Todo.js
//  每次的传递都需要进行校验 向下传递是：this.state.xxx  接收时是：this.props.xxx
// 2，添加todos也是将其方法放在App.js中向下传递  在react中数据只能从上往下传，不能从下往上传

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos:[
                {content:"看电视",complete:true},
                {content:"打游戏",complete:false},
                {content:"写作业",complete:false}
            ]
        }
    }
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                {/* 直接函数调用，得到满足条件的true或者false  是否全部被勾选 */}
                <TodoList toggleAll={this.toggleAll.bind(this)} allChecked={this.allChecked()} toggleTodo={this.toggleTodo.bind(this)} delectTodo={this.delectTodo.bind(this)} todos={this.state.todos}></TodoList>
                {/* 获取到未完成事情的数量 */}
                <Footer leftTodo={this.leftTodo()}></Footer>
            </div>
        )
    }
    // 添加todo
    addTodo(todo){
        this.state.todos.push(todo)//将添加内容推到todos中
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除todo
    delectTodo(todo){
        let index = this.state.todos.findIndex(t=>t===todo)
        this.state.todos.splice(index,1);//利用splice删除该数据
        this.setState({
            todos:this.state.todos
        })
    }
    // 切换单个todo状态
    toggleTodo(todo){
        let index = this.state.todos.findIndex(t=>t===todo)
        this.state.todos[index].complete = !this.state.todos[index].complete//将取反后的内容重新赋值  
        this.setState({
            todos:this.state.todos
        })
    }

    // 批量切换todo的状态  done表示true或false
    toggleAll(done){
        this.state.todos.forEach(todo=>todo.complete=done)
        this.setState({
            todos:this.state.todos
        })
    }

    // 判断所有todo的complete  得到的是全部为true的todo数组
    allChecked(){
        // every是要求每一项都满足条件的数组
    //    let res =  this.state.todos.every(function(todo){
    //         // 判断每一个todo是否为true
    //        return todo.complete == true
    //     })
    //     return res;
    return this.state.todos.every(todo=>todo.complete)//将==true去掉是因为所有条件满足时才OK
    }

    // 未完成的个数
    leftTodo(){
        // 筛选出未完成的任务filter形成了个数组
        return this.state.todos.filter(todo=>todo.complete===false).length
    }

}

export default App;
