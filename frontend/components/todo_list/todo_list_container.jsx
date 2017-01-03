import {connect} from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, receiveTodos, removeTodo, fetchTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = state => ({
  todos: allTodos(state).sort((a,b) => (a.id - b.id))
});

const mapDispatchToProps = dispatch =>({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => (fetchTodos(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
