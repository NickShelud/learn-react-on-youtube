import React from "react";
import s from './NewMessage.module.css'

let newMessageElement = React.createRef();

let addNewMessage = () => {
    let text = newMessageElement.current.value;

    alert(text);
}

const NewMessage = () => {
    return (
        <div className={s.form_post}>
            <textarea ref={newMessageElement} className={s.input_field} name="" id="" cols="30" rows="10" placeholder='new messages'/>
            <div onClick={ addNewMessage } className={s.send_btn}>
                send
            </div>
        </div>
    )
}

export default NewMessage;