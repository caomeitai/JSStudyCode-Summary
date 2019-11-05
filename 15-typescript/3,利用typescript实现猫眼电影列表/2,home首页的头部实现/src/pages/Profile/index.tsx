import * as React from "react"
import { connect } from "react-redux"
import { typeRootState } from "../../store/reducers"
import { TypeProfile } from "../../store/reducers/profile"
import actions from "../../store/actions/profile"
import { RouteComponentProps } from "react-router"
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions
interface Iparams{}
type RouteProps =  RouteComponentProps<Iparams>
type Props = StateProps & DispatchProps & RouteProps & {
    children ?:any
}

class Profile extends React.Component<Props>{
   render(){
       return(
           <div>Mine</div>
       )
   }
}

let mapStateToProps = function(state:typeRootState):TypeProfile{
   return state.Profile
}

export default connect(mapStateToProps,actions)(Profile)