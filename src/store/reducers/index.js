import { combineReducers } from 'redux';
import todos from './todos';
import config from './config';
import setting from './setting';
export default combineReducers({ todos, config, setting });
