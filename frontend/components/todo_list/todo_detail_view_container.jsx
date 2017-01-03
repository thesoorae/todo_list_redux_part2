import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';

// import { allTodos } from '../reducers/selectors';

// const mapStateToProps = state => ({
//   todos: allTodos(state).sort((a,b) => (a.id - b.id))
// });

const mapDispatchToProps = dispatch =>({
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
