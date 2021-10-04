// reducer takes in 2 params: initial state, and action you want to execute
// action can contain action type and potential payload
// reducer typically use switch statements

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;