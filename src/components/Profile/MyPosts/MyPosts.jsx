import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

let postsData = [
    {message: 'Hi, how are you?', likeCount: 5},
    {message: "It's my first post", likeCount: 10},
]

let posts = postsData.map(post => <Post messages={post.message} likeCount="5" />)

const MyPosts = () => {
    return (
        <div>
            <p className={s.title_posts_block}>My posts</p>
            <NewPost />

            <div className={s.posts}>
                <Post messages="Hi, how are you?" likeCount="5" />
                <Post messages="It's my first post" likeCount="10" />
            </div>
        </div>
    )
}

export default MyPosts;
