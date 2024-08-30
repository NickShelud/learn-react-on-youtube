import React from "react";
import s from './NewPost.module.css'
import {addPostActionCreater, updateTextareaActionCreater} from "../../../../redux/store";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onChangeTextarea = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextareaActionCreater(text));
    }

    return (
        <div className={s.form_post} action="">
            <textarea
                onChange={ onChangeTextarea }
                ref={newPostElement}
                className={s.input_field}
                type="text" placeholder='your message'
                value={props.newPostText}/>
            <div onClick={ addNewPost } className={s.send_btn} type="submit">
                SEND
            </div>
        </div>
    )
}

export default NewPost;