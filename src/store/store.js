import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import usersReducer from '../reducers/usersReducer';
import todosReducer from '../reducers/todosReducer';
import saga from '../sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware();
const rootRedcuers = combineReducers({
    users: usersReducer,
    todos: todosReducer,
})
const store = createStore(rootRedcuers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga);
export default store;