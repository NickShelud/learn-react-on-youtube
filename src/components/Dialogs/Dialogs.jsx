import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let DialogsData = [
    {name: 'Nastya', id: 1},
    {name: 'Ron', id: 2},
    {name: 'Alex', id: 3},
    {name: 'John', id: 4},
    {name: 'James', id: 5},
];

let MessagesData = [
    {message: 'Hi, how are you'},
    {message: "i'm fine. And you?"},
    {message: "I'm good"},
]

let dialogs = DialogsData.map(dialog => <Dialog dialogWith={dialog.name} id={dialog.id} />)
let messages = MessagesData.map(message => <Message message={message.message}/>)

const Dialogs = () => {
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