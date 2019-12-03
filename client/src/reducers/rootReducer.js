import {combineReducers} from "redux";
import userRepoReducer from "./userReducer";
import daysRepoReducer from "./daysReducer";
import appReducer from "./appReducer";

export default combineReducers({
    userRepo: userRepoReducer,
    daysRepo: daysRepoReducer,
    appRepo: appReducer
});