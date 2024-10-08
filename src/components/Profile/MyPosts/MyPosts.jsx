import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    let posts = props.posts.map((post) => <Post messages={post.message} likeCount={post.likeCount} />)

    return (
        <div>
            <p className={s.title_posts_block}>My posts</p>
            <NewPost
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />

            <div className={s.posts}>
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;
