import { combineReducers } from "redux";
import changecatReducer from "./changeCatreducer";

const rootreducers = combineReducers({
  changecatReducer,
});

export default rootreducers;
