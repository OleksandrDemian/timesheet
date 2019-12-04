import { CONFIRM_CHOOSED_DATE } from "../actions/actions";

const DEFAULT_STATE = () => {
    const date = new Date();
    return {
        month: Number(date.getMonth()),
        year: Number(date.getFullYear())
    }
};

function appReducer(state = DEFAULT_STATE(), action){
    switch(action.type){
        case CONFIRM_CHOOSED_DATE:
            const { month, year } = action.payload;
            return Object.assign({}, state, { month: Number(month), year: Number(year) });
        default:
            return state;
    }
}

export default appReducer;