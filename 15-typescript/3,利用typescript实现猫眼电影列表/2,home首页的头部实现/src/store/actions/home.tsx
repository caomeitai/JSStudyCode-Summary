import * as types from "../action-types";

export default {
  setCurrentCategory(payload: any) {
    return { type: types.SET_CURRENT_CATEGORY, payload };
  }
};
