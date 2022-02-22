import { combineReducers} from 'redux';

import auth from './auth'

import data from './posts';

export default combineReducers({ data, auth });