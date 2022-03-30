import { combineReducers } from 'redux';
import adminAuthReducer from '../reducers/auth';
const reducers = combineReducers({ adminAuth:adminAuthReducer });
export default reducers;