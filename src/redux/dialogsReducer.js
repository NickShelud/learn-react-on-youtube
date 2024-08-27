const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';

export const dilogsReducer = (state, action) => {

    if (action.type === 'ADD-NEW-MESSAGE') {
        let newMessage = {
            message: state.newMessage
        }

        state.messages.push(newMessage);
        state.newMessage = '';
    } else if (action.type === 'UPDATE-MESSAGE-FIELD') {

        state.newMessage = action.newMessage;
    }

    return state;
}

export default dilogsReducer;

// export const dilogsReducer = (state, action) => {
//
//     switch (action.type) {
//         case ADD_NEW_MESSAGE:
//             let newMessage = {
//                 message: state.newMessage
//             }
//
//             state.messages.push(newMessage);
//             state.newMessage = '';
//             console.log(state)
//             return state;
//         case UPDATE_MESSAGE_FIELD:
//             state.newMessage = action.newMessage;
//
//             return state;
//     }
// }