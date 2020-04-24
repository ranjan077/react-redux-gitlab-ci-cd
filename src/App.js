import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Users from './components/Users';
import Todos from './components/Todos';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users/>
        <Todos/>
      </Provider>
    </div>
  );
}

export default App;
