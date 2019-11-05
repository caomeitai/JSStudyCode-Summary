import * as React from "react"
import { connect } from "react-redux"
import { typeRootState } from "../../store/reducers"
import { TypeMine } from "../../store/reducers/mine"
import actions from "../../store/actions/mine"
import { RouteComponentProps } from "react-router"


type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions
interface Iparams{}
type RouteProps =  RouteComponentProps<Iparams>
type Props = StateProps & DispatchProps & RouteProps & {
    children ?:any
}

class Mine extends React.Component<Props>{
   render(){
       return(
           <div>Mine</div>
       )
   }
}

let mapStateToProps = function(state:typeRootState):TypeMine{
   return state.mine
}

export default connect(mapStateToProps,actions)(Mine)