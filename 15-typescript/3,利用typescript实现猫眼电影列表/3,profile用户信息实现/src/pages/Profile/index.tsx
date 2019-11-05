import * as React from "react";
import { connect } from "react-redux";
import { typeRootState } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import actions from "../../store/actions/profile";
import { RouteComponentProps } from "react-router";
import { Descriptions, Button } from "antd";
import NavHeader from "../../components/NavHeader";
import "./index.less";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Iparams {}
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps &
  DispatchProps &
  RouteProps & {
    children?: any;
  };

class Profile extends React.Component<Props> {
  render() {
    // console.log(this.props)//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
    let main; //默认组件或登录组件或注册组件或用户信息组件
    //实现用户信息组件是jsx
    main = (
      <div className="user-info">
        <Descriptions className="ant-descriptions-title" title="用户信息" layout="vertical">
          <Descriptions.Item  label="用户名">草莓泰</Descriptions.Item>
          <Descriptions.Item label="手机号">1810000000</Descriptions.Item>
          <Descriptions.Item label="邮箱">123@qq.com</Descriptions.Item>
        </Descriptions>
        <Button type="danger">退出登录</Button>
      </div>
    );
    return (
      <section>
        {/* 在jsx中渲染jsx需要{},通过props拿到路由history */}
        <NavHeader history={this.props.history}>个人中心</NavHeader>
        {main}
      </section>
    );
  }
}

let mapStateToProps = function(state: typeRootState): TypeProfile {
  return state.profile;
};

export default connect(
  mapStateToProps,
  actions
)(Profile);
