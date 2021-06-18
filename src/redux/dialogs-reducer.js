const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}
// из  DialogContainer: // и далее передаём newMessageBody в action-creator sendMessagesCreator и указываем его в dialog-reducer
// ... затем см. выше по коду - SEND_MESSAGE: newMessageBody берем не из state, как ранее, поскольку его там уже нет,
// а берём из action

export const sendMessagesCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;