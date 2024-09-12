const initialState = 0;
const incremetDecrementNumber = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else if (action.type === "DECREMENT") {
        return state - 1;
    } else {
        console.log("Action can not Exist");
    }
}

export default incremetDecrementNumber;