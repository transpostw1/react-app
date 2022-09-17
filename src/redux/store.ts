import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadState } from "./localstorage";
import rootReducer from "./rootReducer";

// export const persistedState = loadState();

const store = createStore(
  rootReducer,
  // persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
