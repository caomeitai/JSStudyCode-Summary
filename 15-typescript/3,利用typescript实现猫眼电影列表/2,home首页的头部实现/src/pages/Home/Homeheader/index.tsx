import * as React from "react";
import { Icon } from "antd";
import "./index.less";
// 过渡动画
import { Transition } from "react-transition-group";

// duration设置延迟时间，下面的timeout属性使用
const duration = 300;

// 默认动画样式
const defaultStyle = {
  opacity: 0,
  display: "none",
  //ease-in-out规定以慢速开始和结束的过渡效果
  transition: `all ${duration}ms ease-in-out`
};

// 过渡样式类型
interface TypeTransitionStyle {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
  unmounted: React.CSSProperties;
}
// 过渡样式
const transitionStyle: TypeTransitionStyle = {
  entering: { opacity: 1, display: "block" },
  entered: { opacity: 1, display: "block" },
  exiting: { opacity: 0, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" }
};
// 接收home组件中数据的类型
interface Props {
  currentCategory: string;
  setCurrentCategory: any;
}

// 定义状态需要传递到组件
interface State {
  in: boolean;
}

class Homeheader extends React.Component<Props, State> {
  // 初始化列表显示状态，默认是不显示的
  state = { in: false };
  // 实现ul状态改变除了改变state外，当前分类也改变
  setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: EventTarget = event.target; 
    // console.log(target);//拿到所点击的元素标签
    let type = (target as HTMLUListElement).dataset.type;
    console.log(type)//拿到所点击的元素标签所对应的type类型，修改类型状态
    // 修改的状态除了控制列表显示与否外，还改变type的值
    this.setState({in:false},()=>{
      this.props.setCurrentCategory(type)
    })
  };

  render() {
    // console.log(this.props);//{currentCategory: "all", setCurrentCategory: undefined}
    return (
      <div className="home-header">
        <div>
          <span>猫眼电影</span>
          <Icon
            type="bars"
            onClick={() => this.setState({ in: !this.state.in })}
          ></Icon>
        </div>
        {/* timeout设置的是延迟时间，准确来说应该是动画出现和消失的第三阶段的延迟时间 */}
        <Transition in={this.state.in} timeout={duration}>
          {
            state => {
            return (
              // ul列表能够点击肯定是展开的，那么state.in就一定是true
              // 点击之后改变状态就导致state.in变为false
              <ul
                className="header-category"
                style={{
                  ...defaultStyle,
                  // 根据state变化，过渡动画的透明度随着变化
                  ...transitionStyle[state]
                }}
                onClick={this.setCurrentCategory}
              >
                <li data-type="all" className={ this.props.currentCategory == "all" ? "active" : ""}>所有电影</li>
                <li data-type="now" className={this.props.currentCategory == "now" ? "active" : ""} > 正在热映</li>
                <li data-type="soon"className={this.props.currentCategory == "soon" ? "active" : ""}>即将上映</li>
              </ul>
            );
          }}
        </Transition>
      </div>
    );
  }
}
export default Homeheader;
