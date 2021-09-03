import { SHOW_MODAL, HIDE_MODAL } from '../constants/actionTypes';

export const showModal = () => async (dispatch) => {
    dispatch({ type: SHOW_MODAL });
}


export const hideModal = () => async (dispatch) => {
    dispatch({ type: HIDE_MODAL });
}