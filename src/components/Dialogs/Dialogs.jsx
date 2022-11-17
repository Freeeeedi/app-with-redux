import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <Messages id={m.id} message={m.message} />);

    let newMessage = React.createRef();
    let onSendMessage = () => {
        let messageText = newMessage.current.value;
        props.sendMessage(messageText);
    };
    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.updateNewMessageText(messageText);
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
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} name="messageText" id="" cols="30" rows="10"></textarea>
                    <button onClick={onSendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;