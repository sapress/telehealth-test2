export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_ OUT';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

// async action creator example (for an api call)
// export const createStream = (formValues) => async (dispatch) => {
//     //post request with axios
//     streams.post('/streams', formValues);
// };
