import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import timeslotReducer from "./reducer";

const rootReducer = combineReducers({
  timeslot: timeslotReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
