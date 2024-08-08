import React from "react";

let renererEntireTree = () => {
    console.log('tree changed')
}

let state = {
    profile: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 5},
            {id: 2, message: "It's my first post", likeCount: 10},
            {id: 3, message: "Test post", likeCount: 15},
        ],
        newPostText: ''
    },

    dialogs: {
        dialog: [
            {name: 'Nastya', id: 1},
            {name: 'Ron', id: 2},
            {name: 'Alex', id: 3},
            {name: 'John', id: 4},
            {name: 'James', id: 5},
            {name: 'TestPerson', id: 6},
        ],
        messages: [
            {message: 'Hi, how are you'},
            {message: "i'm fine. And you?"},
            {message: "I'm good"},
            {message: "test message"},
        ],

        newMessage: ''
    },

    navbar: {
        friends: [
            {name: 'Nastya', id: 1},
            {name: 'Ron', id: 2},
            {name: 'Alex', id: 3},
        ]
    }
}

export let addPost = () => {

    let newPost = {
        id: 4,
        message: state.profile.newPostText,
        likeCount: 0,
    }

    state.profile.posts.push(newPost);
    state.profile.newPostText = '';

    renererEntireTree(state)
}

export let updateTextarea = (newText) => {
    state.profile.newPostText = newText;

    renererEntireTree(state)
}

export let addNewMessage = () => {
    let newMessage = {
        message: state.dialogs.newMessage
    }

    state.dialogs.messages.push(newMessage);
    state.dialogs.newMessage = '';

    renererEntireTree(state)
}

export let updateMessageField = (newMessage) => {
    state.dialogs.newMessage = newMessage;

    renererEntireTree(state)
}

export const subscribe = (observer) => {
    renererEntireTree = observer;
}

export default state;