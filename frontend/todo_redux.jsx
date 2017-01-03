
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import {allTodos} from './reducers/selectors';
import Root from './components/root';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import {fetchAllTodos} from './util/todo_api_util';

const store = configureStore();
window.fetchAllTodos = fetchAllTodos;
window.fetchTodos = fetchTodos;


document.addEventListener("DOMContentLoaded", () =>{
  ReactDOM.render(
    <Root store={store} />,
      document.getElementById('root')
  );
});



const newTodos = [
  {
    id: 1,
    title: "wash face",
    body: "with soap",
    done: false
  }, {
    id: 2,
    title: "wash cat",
    body: "with shampoo",
    done: true
  },
];

window.store = store;

window.allTodos = allTodos(store.getState());
window.newTodos = newTodos;

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
