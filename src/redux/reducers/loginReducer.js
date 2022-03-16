import {SIGN_IN, SIGN_OUT} from '../types/loginTypes';

const defaultState = {
    isLoading: false,   
};
export default function reducer(state = defaultState, action) {
    
    switch (action.type) {
        case SIGN_OUT:
            return {
                ...state,
                isLoading: false
            };
        case SIGN_IN:
            return {
                ...state,
                isLoading: true,
            };
        default: {
            return state;
        }
    }
}
