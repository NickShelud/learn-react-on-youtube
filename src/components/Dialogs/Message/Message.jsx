import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message;