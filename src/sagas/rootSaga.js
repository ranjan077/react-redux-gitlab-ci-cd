import { takeLatest } from 'redux-saga/effects'
import fetchTODOS from './todoSaga';
import fetchUsers from './userSaga'

function* saga() {
    yield takeLatest('FETCH_USERS', fetchUsers);
    yield takeLatest('FETCH_TODOS', fetchTODOS);
   
}

export default saga;

