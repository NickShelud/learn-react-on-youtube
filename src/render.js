import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updateTextarea, addNewMessage, updateMessageField} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renererEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateTextarea={updateTextarea}
                addMessage = {addNewMessage}
                updateMessageField = {updateMessageField}
            />
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
