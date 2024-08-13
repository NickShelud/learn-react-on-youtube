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
    _addPost(props) {
        let newPost = {
            id: 4,
            message: this._state.profile.newPostText,
            likeCount: 0,
        }

        this._state.profile.posts.push(newPost);
        this._state.profile.newPostText = '';
        this.renererEntireTree(this._state)
    },
    _updateTextarea(newText) {
        this._state.profile.newPostText = newText;
        this.renererEntireTree(this._state)
    },
    _addNewMessage() {
        let newMessage = {
            message: this._state.dialogs.newMessage
        }

        this._state.dialogs.messages.push(newMessage);
        this._state.dialogs.newMessage = '';
        this.renererEntireTree(this._state)
    },
    _updateMessageField(newMessage) {
        this._state.dialogs.newMessage = newMessage;
        this.renererEntireTree(this._state)
    },

    subscribe(observer)  {
        this.renererEntireTree = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-TEXTAREA') {
            this._updateTextarea(action.newText)
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._addNewMessage()
        } else if (action.type === 'UPDATE-MESSAGE-FIELD') {
            this._updateMessageField(action.newMessage)
        }
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateTextareaActionCreater = (text) => ({type: UPDATE_TEXTAREA, newText: text})
export const addNewMessageActionCreater = () => ({type: ADD_NEW_MESSAGE})
export const updateMessageFieldActionCreater = (text) => ({type: UPDATE_MESSAGE_FIELD, newMessage: text})



export default store;