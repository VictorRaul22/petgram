import { SET_CATEGORIES } from "../const/types";

const dataInitialState = {
  categories: [],
};
// eslint-disable-next-line default-param-last
const mainDataReducer = (state = dataInitialState, action) => {
  const { type = null, payload = null } = action;
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    default:
      return state;
  }
};
export { mainDataReducer };
