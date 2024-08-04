let state = {
    profile: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 5},
            {id: 2, message: "It's my first post", likeCount: 10},
            {id: 3, message: "Test post", likeCount: 15},
        ]
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
        ]
    },

    navbar: {
        friends: [
            {name: 'Nastya', id: 1},
            {name: 'Ron', id: 2},
            {name: 'Alex', id: 3},
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 4,
        message: postMessage,
        likeCount: 0,
    }

    state.profile.posts.push(newPost);
}

export default state;