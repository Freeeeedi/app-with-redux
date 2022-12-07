let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };

        default:
            return state;
    }
}

export let followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export let unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;