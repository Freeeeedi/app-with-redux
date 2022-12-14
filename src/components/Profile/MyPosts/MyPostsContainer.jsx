import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
        },
        updateNewPostText: (newPostText) => {
            dispatch(updateNewPostTextActionCreater(newPostText));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;