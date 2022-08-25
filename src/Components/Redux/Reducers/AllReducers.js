import { combineReducers } from "redux";
import GetPostReducer from "./GetPostReducer";
import LoginReducer from "./LoginReducer";
const allreducer = combineReducers({
  GetPostReducer,
  LoginReducer,
});

export default allreducer;
