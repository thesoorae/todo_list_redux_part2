import {connect} from 'react-redux';
import TodoList from './todo_list';
import {
  receiveTodo,
  receiveTodos,
  removeTodo,
  fetchTodos,
  createTodo ,
  updateTodo,
  deleteTodo } from '../../actions/todo_actions';
import { fetchAllSteps } from '../../actions/step_actions';
import { allTodos } from '../../reducers/selectors';
import {clearErrors} from '../../actions/error_actions';


const mapStateToProps = state => ({
  todos: allTodos(state).sort((a,b) => (a.id - b.id)),
  errors: state.errors
});

const mapDispatchToProps = dispatch =>({
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  clearErrors: () => dispatch(clearErrors()),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchAllSteps: () => dispatch(fetchAllSteps())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
