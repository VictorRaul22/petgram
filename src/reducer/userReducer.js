import { TOGGLE_AUTH } from "../const/types";

const userInitialValue = {
  isAuth: false,
};
// eslint-disable-next-line default-param-last
const userReducer = (state = userInitialValue, action) => {
  const { type = null, payload = null } = action;
  switch (type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};
export { userReducer };
