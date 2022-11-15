import style from './../Sidebar.module.css';
import FriendItem from './FriendItem/FriendItem';

let MyFriends = (props) => {
    let friendList = props.state.map(f => <FriendItem name={f.name} avatar={f.avatar} link={f.link} />);
    return (
        <div className={style.friends_block}>
            <div className={style.friends__title}>
                My friends
            </div>
            <div className={style.friends__container}>
                {friendList}
            </div>
        </div>
    );
};

export default MyFriends;