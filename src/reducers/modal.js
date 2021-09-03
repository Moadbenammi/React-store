import { SHOW_MODAL, HIDE_MODAL } from "../constants/actionTypes";

const modalReducer = (state = {isOpen : false}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, isOpen : true};
    case HIDE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
