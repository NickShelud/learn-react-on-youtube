import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    renererEntireTree() {
        console.log('tree changed')
    },

    subscribe(observer)  {
        this.renererEntireTree = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.navbar = sidebarReducer(this._state.navbar, action);

        this.renererEntireTree(this._state);
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateTextareaActionCreater = (text) => ({type: UPDATE_TEXTAREA, newText: text})
export const addNewMessageActionCreater = () => ({type: ADD_NEW_MESSAGE})
export const updateMessageFieldActionCreater = (text) => ({type: UPDATE_MESSAGE_FIELD, newMessage: text})



export default store;