import * as actionType from "../action/ActionTypes";
import initState from "./initState";

export default function changecatReducer(
  state = initState.currentcategory,
  action
) {
  switch (action.type) {
    case actionType.CHANGECATEGORY:
      return action.payload;

    default:
      return state;
  }
}
