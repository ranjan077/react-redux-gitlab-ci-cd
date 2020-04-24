import {FETCH_USERS_REQUEST, FETCH_USERS_SUCESS, FETCH_USERS_ERROR} from '../actiontypes/userActionTypes';

const INITIAL_STATE = {
    users: [],
    loading: false,
}

function usersReducer(state= INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
        case FETCH_USERS_REQUEST: {
            return {
                ...state,
                ...payload,
                loading: true,
            }
        }
        case FETCH_USERS_SUCESS: {
            return {
                ...state,
                ...payload,
                loading: false,
            }
        }
        case FETCH_USERS_ERROR: {
            return {
                ...state,
                ...payload,
                loading: false,
            }
        }
        case 'UPDATE_THIRD_USER': {
            const newState = {...state};
            newState.users[3].name='RANJAN';
            newState.users = [...newState.users]
            debugger;
            return {
                ...newState,
                loading: false,
            };
        }

        case 'ADD_NEW_NAME_AT_TOP': {
            const newState = {...state};
            newState.users = [{name: 'TREX'}, ...newState.users]
            return {
                ...newState,
                loading: false,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }

}

export default usersReducer;