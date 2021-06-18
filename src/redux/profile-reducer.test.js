import React from 'react';
import profileReducer, {addPostActionCreator} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?)', likesCount: 30},
        {id: 2, message: 'It\'s my firs React-app', likesCount: 17},
        {id: 3, message: 'Привет!', likesCount: 5},
        {id: 4, message: 'Прошли тему map', likesCount: 14},
        {id: 5, message: 'Внимание на уроки 16 и 25!!!', likesCount: 41}
    ]
};

it('length of posts should be incremented',  () => {
    // 1. готовим исходные данные - test data
    let action = addPostActionCreator('it-kamasutra.com');
// 2. action
    let newState = profileReducer(state, action)
// 3. проверяем ожмдания - expectations
    expect (newState.posts.length).toBe(6);
});

it('message of new post should be \'it-kamasutra.com\'',  () => {
    // 1. готовим исходные данные - test data
    let action = addPostActionCreator('it-kamasutra.com');
// 2. action
    let newState = profileReducer(state, action)
// 3. проверяем ожмдания - expectations
    expect (newState.posts[5].message).toBe('it-kamasutra.com');
});

it('after deleting length of message should by decremented',  () => {
    // 1. готовим исходные данные - test data
    let action = deletePost(1);
// 2. action
    let newState = profileReducer(state, action)
// 3. проверяем ожмдания - expectations
    expect (newState.posts.length).toBe(3);
});