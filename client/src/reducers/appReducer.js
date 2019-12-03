const DEFAULT_STATE = () => {
    const date = new Date();
    return {
        month: date.getMonth(),
        year: date.getFullYear()
    }
};

function appReducer(state = DEFAULT_STATE(), action){
    return state;
}

export default appReducer;