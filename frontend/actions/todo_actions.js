export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util.js';


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

export const fetchTodos = dispatch => (
  APIUtil.fetchAllTodos().then(
    todos => dispatch(receiveTodos(todos)),
    console.log
  )
);
