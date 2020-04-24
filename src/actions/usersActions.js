import {FETCH_USERS} from '../actiontypes/userActionTypes'

export  const getUsersAction =  () => {
    return {
        type: FETCH_USERS
    }
}

export  const updateThirdUser =  () => {
    return {
        type: 'UPDATE_THIRD_USER'
    }
}

export  const addNewnameAtTop =  () => {
    return {
        type: 'ADD_NEW_NAME_AT_TOP'
    }
}
