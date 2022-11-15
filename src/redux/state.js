import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { text: "Good day to walk", likesCount: 1, id: 1 },
                { text: "Good night", likesCount: 15, id: 2 },
                { text: "Hello!", likesCount: 30, id: 3 },
            ],
            newPostText: 'New text',
        },
        dialogsPage: {
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
        },
        sidebar: {
            myFriends: [
                { name: 'Sergey', id: 1, avatar: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80', link: '' },
                { name: 'Olga', id: 2, avatar: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg', link: '' },
                { name: 'Zhenya', id: 3, avatar: 'https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg', link: '' },
            ]
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export default store;