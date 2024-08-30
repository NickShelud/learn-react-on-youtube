const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';

let initialReducer = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 10},
        {id: 3, message: "Test post", likeCount: 15},
    ],
    newPostText: ''
}

const profileReducer = (state = initialReducer, action) => {
    if(action.type === 'ADD-POST') {
        let newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0,
        }

        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === 'UPDATE-TEXTAREA') {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;

// const profileReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             let newPost = {
//                 id: 4,
//                 message: state.newPostText,
//                 likeCount: 0,
//             }
//
//             state.posts.push(newPost);
//             state.newPostText = '';
//
//             return state
//         case UPDATE_TEXTAREA:
//             state.newPostText = action.newText;
//             return state;
//     }
// }