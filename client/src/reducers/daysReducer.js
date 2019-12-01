import { SET_DAYS, UPDATE_CHECKED_DAYS } from "../actions/actions";

const defaultDaysStateRepo = {
    days: null
};

const DEFAULT_COMESSA = {
    oraInizio: "",
    oraFine: "",
    oreLavorate: "",
    checked: true
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
function daysRepoReducer (state = defaultDaysStateRepo, action) {
    let days = null;
    switch (action.type) {
        case SET_DAYS:
            days = action.payload;

            days.map(day => {
                day.comessa = DEFAULT_COMESSA;
            });

            return Object.assign({}, state, { days });
        case UPDATE_CHECKED_DAYS:
            let { prop, value } = action.payload;
            days = state.days;

            for(let i = 0; i < days.length; i++){
                days[i].comessa[prop] = value;
            }

            return Object.assign({}, state, { days });
        default:
            return state;
    }
}

export default daysRepoReducer;