import UserData from "./Downs";
import {combineReducers} from 'redux';
const rootReducer= combineReducers({
    userdata:UserData
});
export default rootReducer;