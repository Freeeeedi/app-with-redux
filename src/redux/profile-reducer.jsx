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
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: action.newPostText,
                likesCount: 0,
            }
            let copyState = { ...state };
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = { ...state };
            copyState.newPostText = action.newPostText;
            return copyState;
        }
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