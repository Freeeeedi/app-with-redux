import style from './Users.module.css';
import axios from 'axios';
import UserPhoto from '../../assets/images/user.jpg';


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={style.user}>
                    <div className={style.user_left}>
                        <div className={style.user_img}>
                            <img src={u.photos.small ? u.photos.small : UserPhoto} alt="" />
                        </div>
                        <div className={style.button}>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button>
                                : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>
                            }
                        </div>
                    </div>
                    <div className={style.user_right}>
                        <div className={style.user_left_info}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={style.user_right_info}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Users;