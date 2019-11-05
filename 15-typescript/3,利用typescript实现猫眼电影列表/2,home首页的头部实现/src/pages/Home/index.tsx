import * as React from "react";
import { connect } from "react-redux";
import { typeRootState } from "../../store/reducers";
import { TypeHome } from "../../store/reducers/home";
import actions from "../../store/actions/home";
import { RouteComponentProps } from "react-router";
import Homeheader from "./Homeheader";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Iparams {}
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps &
  DispatchProps &
  RouteProps & {
    children?: any;
  };
interface State {}

class Home extends React.Component<Props, State> {
  render() {
    // {history: {…}, location: {…}, match: {…}, staticContext: undefined, currentCategory: "all", …}
    // console.log(this.props)
    return (
      <div>
        {/* 在header组件中需要当前分类与修改状态方法 */}
        <Homeheader
          currentCategory={this.props.currentCategory}
          setCurrentCategory={this.props.setCurrentCategory}
        ></Homeheader>
        home
      </div>
    );
  }
}

let mapStateToProps = function(state: typeRootState): TypeHome {
  return state.home;
};

export default connect(
  mapStateToProps,
  actions
)(Home);
