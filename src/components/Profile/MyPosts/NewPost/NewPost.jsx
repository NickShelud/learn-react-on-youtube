import React from "react";
import s from './NewPost.module.css'





const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;

        if (typeof props.addPost === 'function') {
            props.addPost(text);
        }
    }
    return (
        <div className={s.form_post} action="">
            <textarea ref={newPostElement} className={s.input_field} type="text" placeholder='your message'/>
            <div onClick={ addNewPost } className={s.send_btn} type="submit">
                SEND
            </div>
        </div>
    )
}

export default NewPost;