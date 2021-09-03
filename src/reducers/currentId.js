import { SET_CURRENT_ID } from "../constants/actionTypes";

const currentIdReducer = (state = {currentId : 0}, action) => {
  switch (action.type) {
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};

export default currentIdReducer;