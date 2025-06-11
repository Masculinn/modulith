import { combineReducers } from "redux";
import cookie from "../slices/cookie";

const rootReducer = combineReducers({
  cookie: cookie,
});

export default rootReducer;
