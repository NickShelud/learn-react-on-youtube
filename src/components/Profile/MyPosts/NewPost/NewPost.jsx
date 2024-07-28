import React from "react";
import s from './NewPost.module.css'

const NewPost = () => {
    return (
        <form className={s.form_post} action="">
            <input className={s.input_field} type="text" placeholder='your message'/>
            <input className={s.send_btn} type="submit"/>
        </form>
    )
}

export default NewPost;