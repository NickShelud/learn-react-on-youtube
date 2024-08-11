import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST', newPost: text});
    }

    let onChangeTextarea = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-TEXTAREA', newText: text}
        props.dispatch(action);
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