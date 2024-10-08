import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renererEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState(store)}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

renererEntireTree(store.getState())

store.subscribe(renererEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
