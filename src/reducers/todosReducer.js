import {FETCH_TODOS_REQUEST, FETCH_TODOS_SUCESS, FETCH_TODOS_ERROR} from '../actiontypes/todosActionTypes';

const INITIAL_STATE = {
    todos: [],
    loading: false,
}
function usersReducer(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
        case  FETCH_TODOS_REQUEST: {
            return {
                ...state,
                ...payload,
                loading: true,
            }
        }
        case FETCH_TODOS_SUCESS: {
            return {
                ...state,
                ...payload,
                loading: false,
            }
        }
        case FETCH_TODOS_ERROR: {
            return {
                ...state,
                ...payload,
                loading: false,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }

}

export default usersReducer;