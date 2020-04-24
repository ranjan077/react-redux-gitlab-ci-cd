import axios from 'axios';

export const getTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    })
}