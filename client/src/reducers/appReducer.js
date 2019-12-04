import { CONFIRM_CHOOSED_DATE } from "../actions/actions";

const DEFAULT_STATE = () => {
    const date = new Date();
    return {
        month: date.getMonth(),
        year: date.getFullYear()
    }
};

function appReducer(state = DEFAULT_STATE(), action){
    switch(action.type){
        case CONFIRM_CHOOSED_DATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default appReducer;