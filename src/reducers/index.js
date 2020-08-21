import { combineReducers } from "redux";
import userReducer from "./user";
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;
