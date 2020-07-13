// const INITIAL_STATE = {
//     const isSignedIn = null,
//     userID = null,
// }

// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return { ...state, isSignedIn: true, userId: action.payload };
//         case SIGN_OUT:
//             return { ...state, isSignedIn: false, userId: null };
//         default:
//             return state;
//     }
// };

export default (action) => {
    switch (action.type) {
        case SIGN_IN:
            return state;
        case SIGN_OUT:
            return state;
        default:
            return state;
    }
};
