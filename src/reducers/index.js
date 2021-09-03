import { combineReducers } from 'redux';

import products from './products';
import auth from './auth';
import modal from './modal';
import currentId from './currentId';

export const reducers = combineReducers({ products, auth, modal, currentId });