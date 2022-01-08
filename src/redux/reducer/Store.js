import { createStore } from "redux";
import rootReducer from "./index";

export default function Store() {
  return createStore(rootReducer);
}
