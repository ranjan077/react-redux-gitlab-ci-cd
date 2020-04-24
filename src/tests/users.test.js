import React from 'react'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {mount} from 'enzyme'
import Users from '../components/Users';
import '../setupTests';

describe('Users component', () => {
    const initialState = {
        users: {
            users: [{
                name: 'DAVE'
            }, {
                name: 'JOHN'
            }]
        }
    };
    const mockStore = configureStore([]);
    const store = mockStore(initialState);
    
    const wrapper = mount(<Provider store={store}><Users /></Provider>);
    
    it('Should render compoenent', () => {
        expect(wrapper.exists('.users-container')).toBe(true);
    });

    it('Should render two users', () => {
        expect(wrapper.find('.user').length).toBe(2);
    });
});
