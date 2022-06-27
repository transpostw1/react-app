import { combineReducers } from "redux";
import rateListReducer from "./rateList/rateListReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  data: rateListReducer,
  user: userReducer
});

export default rootReducer;
