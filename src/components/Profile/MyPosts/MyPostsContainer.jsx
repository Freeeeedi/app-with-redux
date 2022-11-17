import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = (newPostText) => {
        props.store.dispatch(addPostActionCreater(newPostText));
    }
    let onChangeTextarea = (newPostText) => {
        props.store.dispatch(updateNewPostTextActionCreater(newPostText));
    };
    return (
        <MyPosts posts={state.posts} addPost={addPost} updateNewPostText={onChangeTextarea} newPostText={state.newPostText} />
    );
}
export default MyPostsContainer;