import style from './../Dialogs.module.css';


const Messages = (props) => {
    return (
        <div id={props.id} className={props.id > 0 ? style.dialogMessageContainer : style.dialogMyMessageContainer}>
            <div className={style.img} ></div>
            <div className={style.message}>
                {props.message}
            </div>
        </div >

    );
}
export default Messages;