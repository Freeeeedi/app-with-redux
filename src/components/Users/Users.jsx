import style from './Users.module.css';


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, imgUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg', firstName: 'Sergey', status: 'Create page with users!', location: { country: 'Russia,', sity: 'Kaliningrad' }, followed: true },
            { id: 2, imgUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg', firstName: 'Sergey', status: 'Create page with users!', location: { country: 'Russia,', sity: 'Kaliningrad' }, followed: false },
            { id: 3, imgUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg', firstName: 'Sergey', status: 'Create page with users!', location: { country: 'Russia,', sity: 'Kaliningrad' }, followed: true },
        ]);
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={style.user}>
                    <div className={style.user_left}>
                        <div className={style.user_img}>
                            <img src={u.imgUrl} alt="" />
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
                            <div>{u.firstName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={style.user_right_info}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Users;