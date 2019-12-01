import {Action} from "./Action";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginDone = (user) => {
    return Action(LOG_IN, user);
};

export const logOut = () => {
    return Action(LOG_OUT);
}