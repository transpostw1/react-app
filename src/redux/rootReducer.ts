import { combineReducers } from "redux";
import quoteReducer from "./quotes/quotesReducer";
import rateListReducer from "./rateList/rateListReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  data: rateListReducer,
  user: userReducer,
  quote: quoteReducer,
});

export default rootReducer;
