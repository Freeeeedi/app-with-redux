import style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={style.dialogItem}>

            <NavLink to={'/dialogs/' + props.id} className={NavData => NavData.isActive ? style.active : style.item}>
                <img src={props.avatar} alt="" />
                {props.name}
            </NavLink>
        </div>
    );
}
export default DialogItem;