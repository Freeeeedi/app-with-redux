import React from 'react';
import { sendMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = (messageText) => {
        props.store.dispatch(sendMessageActionCreater(messageText));
    };
    let onMessageChange = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreater(messageText));
    };
    return (
        <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessage} dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText} />
    );
}
export default DialogsContainer;