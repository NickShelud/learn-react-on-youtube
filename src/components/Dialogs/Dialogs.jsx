import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialog.map(dialog => <Dialog dialogWith={dialog.name} id={dialog.id} />)
    let messages = props.state.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogs }
            </div>

            <div className={s.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs;