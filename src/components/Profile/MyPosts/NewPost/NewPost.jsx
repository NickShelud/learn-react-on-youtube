import React from "react";
import s from './NewPost.module.css'





const NewPost = (props) => {

    let newPostElement = React.createRef();

    // let addNewPost = () => {
    //     let text = newPostElement.current.value;
    //
    //     if (typeof props.addPost === 'function') {
    //         props.addPost(text);
    //     }
    // }

    let onChangeTextarea = () => {
        let text = newPostElement.current.value;

        props.updateTextarea(text);
    }

    return (
        <div className={s.form_post} action="">
            <textarea
                onChange={ onChangeTextarea }
                ref={newPostElement}
                className={s.input_field}
                type="text" placeholder='your message'
                value={props.newPostText}/>
            <div onClick={ props.addPost } className={s.send_btn} type="submit">
                SEND
            </div>
        </div>
    )
}

export default NewPost;