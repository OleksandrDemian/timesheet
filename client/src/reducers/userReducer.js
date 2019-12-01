import {LOG_IN, LOG_OUT} from "../actions/actions";

const defaultUserStateRepo = {
    user: null
};

function userRepoReducer (state = defaultUserStateRepo, action) {
    switch (action.type) {
        case LOG_IN:
            return Object.assign({}, state, {
                user: action.payload
            });
        case LOG_OUT:
            return Object.assign({}, state, {
                user: null
            });
        default:
            return state;
    }
}

export default userRepoReducer;