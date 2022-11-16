let initialState = {
    myFriends: [
        { name: 'Sergey', id: 1, avatar: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80', link: '' },
        { name: 'Olga', id: 2, avatar: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg', link: '' },
        { name: 'Zhenya', id: 3, avatar: 'https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg', link: '' },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;