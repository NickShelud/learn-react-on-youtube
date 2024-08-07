import React from "react";
import s from './NewMessage.module.css'
import Dialogs from "../Dialogs";

let newMessageElement = React.createRef();

// let addNewMessage = () => {
//     let text = newMessageElement.current.value;
//
//     alert(text);
// }

const NewMessage = (props) => {

    let onchangeMessageField = () => {
        let text = newMessageElement.current.value;

        props.updateMessageField(text);
    }

    return (
        <div className={s.form_post}>
            <textarea onChange={ onchangeMessageField } ref={newMessageElement} className={s.input_field} name="" id="" cols="30" rows="10" placeholder='new messages' value={ props.newMessageText } />
            <div onClick={ props.addMessage } className={s.send_btn}>
                send
            </div>
        </div>
    )
}

export default NewMessage;