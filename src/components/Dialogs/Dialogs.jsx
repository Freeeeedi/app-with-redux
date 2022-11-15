import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import { sendMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map(m => <Messages id={m.id} message={m.message} />);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let messageText = newMessage.current.value;
        props.dispatch(sendMessageActionCreater(messageText));
    };
    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreater(messageText));
    };
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.dialogMessages}>
                <div className={style.dialogMessagesArea}>
                    {messageElements}
                </div>
                <div action="" className={style.postMessageForm}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText} name="messageText" id="" cols="30" rows="10"></textarea>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;