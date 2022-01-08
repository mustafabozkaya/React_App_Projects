import * as actionType from "./ActionTypes";

const Categoryactions = (category) => {
  return {
    type: actionType.CHANGECATEGORY,
    payload: category,
  };
};

export default Categoryactions;
