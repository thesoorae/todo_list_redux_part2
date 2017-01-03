import {connect} from 'react-redux';
import TodoDetailView from '../todo_list/todo_detail_view';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';
import { stepsByTodoId  } from '../../reducers/selectors';
import StepList from './step_list';

const mapStateToProps = state => ({
  todo_id: this.props.todo_id,
  steps: stepsByTodoId(state, this.props.todo_id)
});

const mapDispatchToProps = dispatch =>({
  receiveStep: (step) => dispatch(receiveSteps(step))

});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
