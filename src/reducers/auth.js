import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null, currentOperation : "Login" }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('user', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };

    case actionType.SET_USER:
      return {...state, authData: action.payload};

    case actionType.SWITCH_TO_LOGIN :
      return {...state, currentOperation : "Login"}

    case actionType.SWITCH_TO_SIGNUP :
      return {...state, currentOperation : "Sign Up"}
      
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
      
    default:
      return state;
  }
};

export default authReducer;