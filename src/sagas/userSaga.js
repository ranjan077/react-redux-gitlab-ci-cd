import { call, put} from 'redux-saga/effects'
import  {FETCH_USERS_REQUEST} from '../actiontypes/userActionTypes'
import {getUsers} from  '../api/userApi'

export default function* fetchUsers() {
    try {
        yield put({ type: FETCH_USERS_REQUEST })
        const users = yield call(getUsers);
        yield put({ 
            type: 'FETCH_USERS_SUCESS', 
            payload: {
                users
            } 
        })
    } catch(error) {
        yield put({ type: 'FETCH_USERS_ERROR', error })
    }
    
}