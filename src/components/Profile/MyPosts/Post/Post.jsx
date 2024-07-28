import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <p>{props.messages}</p>
            <div>
                <p>like: {props.likeCount}</p>
            </div>
        </div>
    )
}

export default Post;
