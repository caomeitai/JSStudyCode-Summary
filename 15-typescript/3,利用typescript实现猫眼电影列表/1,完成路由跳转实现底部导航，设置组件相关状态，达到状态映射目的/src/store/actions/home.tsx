//actionCreactor 创建action
import * as types from "../action-types"

// 牢记actionCreactor产生的是action，里面存在的内容肯定有type
export default {
  setCurrentCategory(payload: any) {
    //设置状态需要参数
    return { type: types.SET_CURRENT_CATEGORY, payload };
  }
};
