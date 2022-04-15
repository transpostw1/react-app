import { combineReducers } from "redux";
import rateListReducer from "./rateList/rateListReducer";

const rootReducer = combineReducers({
  data: rateListReducer,
});

export default rootReducer;
