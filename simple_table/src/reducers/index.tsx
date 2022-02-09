import { combineReducers } from 'redux';
import STReducer from './Reducers';


export default combineReducers({
    st: STReducer,
});