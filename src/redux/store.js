import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?)', likesCount: 30},
                {id: 2, message: 'It\'s my firs React-app', likesCount: 17},
                {id: 3, message: 'Привет!', likesCount: 5},
                {id: 4, message: 'Прошли тему map', likesCount: 14},
                {id: 5, message: 'Внимание на уроки 16 и 25!!!', likesCount: 41}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'I\'m currently studying React'},
                {id: 3, message: 'That third message'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo-Yo'},
                {id: 6, message: 'Yes!'}
            ],
            newMessageBody: ''
        },
        sidebar: {

        },
    },
    _callSubscriber () {
        console.log('State changed')
    },
    getState () {
        return this._state;
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;
