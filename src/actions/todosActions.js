import {FETCH_TODOS} from '../actiontypes/todosActionTypes'

export  const getTodosAction =  () => {
    return {
        type: FETCH_TODOS
    }
}