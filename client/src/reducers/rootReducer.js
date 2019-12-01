import {combineReducers} from "redux";
import userRepoReducer from "./userReducer";

export default combineReducers({
    userRepo: userRepoReducer
});