import * as React from "react"
import { connect } from "react-redux"
// 导入的是合并之后的reducer类型
import { typeRootState } from "../../store/reducers"
// 导入的是mine的reducer类型
import { TypeMine } from "../../store/reducers/mine"
import actions from "../../store/actions/mine"
import { RouteComponentProps } from "react-router"
// 将接收到数据的类型props合并到一起(state,action,路由信息,自己传递的数据)
type StateProps = ReturnType<typeof mapStateToProps>//home组件接收的state类型
type DispatchProps = typeof actions//home组件接收的action类型
interface Iparams{}//接收到的路由信息类型
type RouteProps =  RouteComponentProps<Iparams>
type Props = StateProps & DispatchProps & RouteProps & {
    children ?:any//自己传递参数类型，它是可传参数，类型是任意的不确定
}

class Mine extends React.Component<Props>{
   render(){
       // {history: {…}, location: {…}, match: {…}, staticContext: undefined, currentCategory: "all", …}
       // console.log(this.props)
       // console.log(this.props.currentCategory)//all拿到传递的状态
       // console.log(this.props.history)//拿到的是路由信息
       return(
           <div>Mine</div>
       )
   }
}

// 映射的状态是合并之后的，其状态是reducer中的index导出类型
let mapStateToProps = function(state:typeRootState):TypeMine{
   return state.mine
}

export default connect(mapStateToProps,actions)(Mine)