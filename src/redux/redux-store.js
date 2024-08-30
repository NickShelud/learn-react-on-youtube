import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dilogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dilogsReducer,
    navbar: sidebarReducer
})

let store = createStore(reducers);

export default store;