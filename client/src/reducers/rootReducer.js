import {combineReducers} from "redux";
import userRepoReducer from "./userReducer";
import daysRepoReducer from "./daysReducer";

export default combineReducers({
    userRepo: userRepoReducer,
    daysRepo: daysRepoReducer
});