import { SET_CURRENT_ID } from '../constants/actionTypes';

export const setCurrentId = (id) => (dispatch) => {
    dispatch({ type: SET_CURRENT_ID , payload : id });
}