const ADD_NEWS = 'ADD_NEWS'

let initialState = {
    news: [
        {id: 1, newsText: '!!!Новости из STATE', likesCount: 88},
        {id: 2, newsText: '!!!!redux-form опять про базовые вещи', likesCount: 44},
    ]
};

const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            let newNews = {
                id: 3,
                newsText: action.newNewsText,
                likesCount: 0
            };
            return {
                ...state,
                news: [...state.news, newNews],
                newNewsText: ''
            }
        }
        default:
            return state;

    }
}

export const addNewsActionCreator = (newNewsText) => ({type: ADD_NEWS, newNewsText})

export default newsReducer;