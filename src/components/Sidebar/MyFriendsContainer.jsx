import { connect } from 'react-redux';
import MyFriends from './MyFriends/MyFriends';

const mapStateToProps = (state) => {
    return {
        myFriends: state.sidebar.myFriends,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);

export default MyFriendsContainer;