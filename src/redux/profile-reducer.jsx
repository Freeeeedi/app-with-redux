const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { text: "Good day to walk", likesCount: 1, id: 1 },
        { text: "Good night", likesCount: 15, id: 2 },
        { text: "Hello!", likesCount: 30, id: 3 },
    ],
    newPostText: 'New text',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                text: action.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreater = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText,
    }
};
export const updateNewPostTextActionCreater = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText,
    }
};

export default profileReducer;