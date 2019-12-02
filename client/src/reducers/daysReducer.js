import { SET_DAYS, UPDATE_CHECKED_DAYS, CHECK_DAY } from "../actions/actions";

const DEFAULT_DAYS_STATE_REPO = [];

const DEFAULT_COMESSA = {
    oraInizio: "",
    oraFine: "",
    oreLavorate: "",
    checked: false
}
/*
let day = {
    inMonth,
    inWeek,
    name,
    date,
    working,

    comessa
}

let comessa = {
    oraInizio,
    oraFine,
    oreLavorate,
    checked
}
*/
function daysRepoReducer (state = DEFAULT_DAYS_STATE_REPO, action) {
    let days = null;
    switch (action.type) {
        case SET_DAYS:
            days = action.payload;

            return days.map(day => {
                day.comessa = Object.assign({}, DEFAULT_COMESSA);
                return day;
            });
        case UPDATE_CHECKED_DAYS:
            let { prop, value, inMonth } = action.payload;

            return state.map(day => {
                if(day.comessa.checked || day.inMonth === inMonth){
                    day.comessa[prop] = value;
                }
                
                return day;
            });
        case CHECK_DAY:
            let payload = action.payload;
            return state.map(day => {
                if(day.inMonth === payload.inMonth){
                    day.comessa.checked = payload.action;
                    return day;
                } else {
                    return day;
                }
            });
        default:
            return state;
    }
}

export default daysRepoReducer;