import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import listsReducer from "./listsReducer";
import filterReducer from "./filterReducer";

let reducers = combineReducers({filterReducer, listsReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;