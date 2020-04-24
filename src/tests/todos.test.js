import React from 'react'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {mount} from 'enzyme'
import Todos from '../components/Todos';
import '../setupTests';

describe('Users component', () => {
    const initialState = {
        todos: {
            todos: [{
                title: 'Get milk'
            }, {
                title: 'Wash car'
            }]
        }
    };
    const mockStore = configureStore([]);
    const store = mockStore(initialState);
    
    const wrapper = mount(<Provider store={store}><Todos /></Provider>)
    
    it('Should render compoenent', () => {
        expect(wrapper.exists('.todos-container')).toBe(true);
    });

    it('Should render two todos', () => {
        expect(wrapper.find('.todo').length).toBe(2);
    });
});
