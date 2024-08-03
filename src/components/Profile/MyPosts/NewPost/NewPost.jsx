import React from "react";
import s from './NewPost.module.css'

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
}

const NewPost = () => {
    return (
        <div className={s.form_post} action="">
            <textarea ref={newPostElement} className={s.input_field} type="text" placeholder='your message'/>
            <div onClick={ addPost } className={s.send_btn} type="submit">
                SEND
            </div>
        </div>
    )
}

export default NewPost;