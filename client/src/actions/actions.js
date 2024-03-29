import {Action} from "./Action";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_DAYS = "SET_DAYS";
export const UPDATE_CHECKED_DAYS = "UPDATE_CHECKED_DAYS";
export const CHECK_DAY = "CHECK_DAY";
export const CHECK_WORKING_DAYS = "CHECK_WORKING_DAYS";
export const CONFIRM_CHOOSED_DATE = "CONFIRM_CHOOSED_DATE";

export const loginDone = (user) => {
    return Action(LOG_IN, user);
};

export const logOut = () => {
    return Action(LOG_OUT);
}

export const updateCheckedDays = (value) => {
    return Action(UPDATE_CHECKED_DAYS, value);
}

export const setDays = (days) => {
    return Action(SET_DAYS, days);
}

export const checkDay = (inMonth, action) => {
    return Action(CHECK_DAY, { inMonth, action });
}

export const checkAll = action => {
    return Action(CHECK_WORKING_DAYS, action);
}

export const confirmDate = data => {
    return Action(CONFIRM_CHOOSED_DATE, data);
};