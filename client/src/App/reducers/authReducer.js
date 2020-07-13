import { SIGN_IN, SIGN_OUT } from '../actions/index.js';

const initial_state = null;

export default (state = initial_state, action) => {
    switch (action.types) {
        case SIGN_IN:
            return stat;
        default:
            return state;
    }
};
