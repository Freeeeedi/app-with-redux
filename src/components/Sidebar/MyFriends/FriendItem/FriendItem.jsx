import style from './../../Sidebar.module.css';

let FriendItem = (props) => {
    return (
        <div className={style.friendItem}>
            <a href="#">
                <img src={props.avatar} alt="" />
                <span>{props.name}</span>
            </a>
        </div>
    );
};

export default FriendItem;