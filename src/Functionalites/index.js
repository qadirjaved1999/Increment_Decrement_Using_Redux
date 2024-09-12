// Combine all Reducers here like that:
// Firstly Import All Reducer
import incremetDecrementNumber from "./IncrementDecrementReducer";
//For Build Combination
import { combineReducers } from "redux";
//Pass Reducers or States
const rootReducrs = combineReducers({
   incremetDecrementNumber
});

export default rootReducrs;

