const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { name: 'Sergey', id: 1, avatar: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80' },
        { name: 'Olga', id: 2, avatar: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg' },
        { name: 'Zhenya', id: 3, avatar: 'https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg' },
        { name: 'Ivan', id: 4, avatar: 'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg' },
        { name: 'Admin', id: 5, avatar: 'https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/photo-shoot-tips/lead-photo-shoot-tips-hitched-and-clicked.jpeg' },
    ],
    messages: [
        { message: 'Hello!', id: 1 },
        { message: 'What is app?', id: 0 },
        { message: 'Do you come to me?', id: 1 },
        { message: 'Bye', id: 0 },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                message: action.messageText,
                id: 0,
            };
            let copyState = { ...state };
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = { ...state }
            copyState.newMessageText = action.newMessageText;
            return copyState;
        }
        default:
            return state;
    }
};

export const sendMessageActionCreater = (messageText) => {
    return {
        type: SEND_MESSAGE,
        messageText: messageText,
    }
};
export const updateNewMessageTextActionCreater = (newMessageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    }
};

export default dialogsReducer;