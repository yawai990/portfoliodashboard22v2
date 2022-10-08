import {combineReducers} from 'redux';
import rootReducer from './projects';
import authReducer from './Auth';

export default combineReducers({rootReducer,authReducer});