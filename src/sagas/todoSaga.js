import { call, put} from 'redux-saga/effects'
import  {FETCH_TODOS_REQUEST} from '../actiontypes/todosActionTypes'
import {getTodos} from  '../api/todoApi'

export default function* fetchTODOS() {
    try {
        yield put({ type: FETCH_TODOS_REQUEST })
        const todos = yield call(getTodos);
        yield put({ type: 'FETCH_TODOS_SUCESS', payload: {
            todos
        }  })
    } catch(error) {
        yield put({ type: 'FETCH_TODOS_ERROR', error })
    }
    
}