  
import { AUTH, SWITCH_TO_LOGIN } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    
    alert("Incorrect infos")
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    alert("Account created succussfully!");

    dispatch({type : SWITCH_TO_LOGIN });
  
  } catch (error) {
    alert("Email already exist !");
  }
};
