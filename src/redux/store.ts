import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import alertReducer from "./reducer";


let reducers = combineReducers({
    alert: alertReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

// window.store = store;

export default store;