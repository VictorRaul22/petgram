import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { mainDataReducer } from "./mainDataReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  data: mainDataReducer,
});
