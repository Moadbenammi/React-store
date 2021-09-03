import { SET_USER } from "../constants/actionTypes";

export const setUser = (user) => async (dispatch) => {
    dispatch({ type: SET_USER, payload : user });
}

