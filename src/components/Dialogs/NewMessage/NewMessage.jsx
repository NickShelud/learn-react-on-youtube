import React from "react";
import s from './NewMessage.module.css'
import {addNewMessageActionCreater, updateMessageFieldActionCreater} from "../../../redux/store";

let newMessageElement = React.createRef();



const NewMessage = (props) => {

    let onchangeMessageField = () => {
        let text = newMessageElement.current.value;

        props.dispatch(updateMessageFieldActionCreater(text));
    }

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreater())
    }

    return (
        <div className={s.form_post}>
            <textarea
                onChange={ onchangeMessageField }
                ref={newMessageElement}
                className={s.input_field}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder='new messages'
                value={ props.newMessage }
            />
            <div onClick={ addNewMessage } className={s.send_btn}>
                send
            </div>
        </div>
    )
}

export default NewMessage;