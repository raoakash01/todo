import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/taskinput';
import TaskList from './components/tasklist';
import './assets/style.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To-do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
