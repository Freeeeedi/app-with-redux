import { NavLink } from 'react-router-dom';
import MyFriendsContainer from './MyFriendsContainer';
import style from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.item}><NavLink to='/profile' className={NavData => NavData.isActive ? style.active : style.item}>Profile</NavLink></li>
                <li className={style.item}><NavLink to='/dialogs' className={NavData => NavData.isActive ? style.active : style.item}>Messages</NavLink></li>
                <li className={style.item}><NavLink to='/users' className={NavData => NavData.isActive ? style.active : style.item}>Users</NavLink></li>
                <li className={style.item}><NavLink to='/news' className={NavData => NavData.isActive ? style.active : style.item}>News</NavLink></li>
                <li className={style.item}><NavLink to='/music' className={NavData => NavData.isActive ? style.active : style.item}>Music</NavLink></li>
                <li className={style.item}><NavLink to='/settings' className={NavData => NavData.isActive ? style.active : style.item}>Settings</NavLink></li>
            </ul>
            <MyFriendsContainer />
        </nav>
    );
}
export default Sidebar;