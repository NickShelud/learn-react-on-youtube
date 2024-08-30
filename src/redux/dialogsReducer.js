const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';

let initialReducer = {
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
}

export const dilogsReducer = (state = initialReducer, action) => {

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