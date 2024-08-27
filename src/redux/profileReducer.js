const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';

const profileReducer = (state, action) => {
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