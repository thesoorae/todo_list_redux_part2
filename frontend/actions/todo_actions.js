export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util.js';
import {receiveErrors} from './error_actions';


export const receiveTodos = (todos) =>({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) =>({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const fetchTodos = () => dispatch => (
  APIUtil.fetchAllTodos().then(
    todos => dispatch(receiveTodos(todos)),
    console.log
  )
);

export const createTodo = (todo) => dispatch => (
  APIUtil.createTodo(todo).then(
    newtodo => dispatch(receiveTodo(newtodo)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updateTodo = (todo) => dispatch => (
    APIUtil.updateTodo(todo).then(
      newtodo => dispatch(receiveTodo(newtodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteTodo = (todo) => dispatch => (
    APIUtil.deleteTodo(todo).then(
      oldtodo => dispatch(removeTodo(oldtodo.id)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
