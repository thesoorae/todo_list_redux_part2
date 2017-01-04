import {connect} from 'react-redux';
import TodoDetailView from '../todo_list/todo_detail_view';
import { clearErrors } from '../../actions/error_actions';
import * as StepActions from '../../actions/step_actions';
import { stepsByTodoId  } from '../../reducers/selectors';
import StepList from './step_list';

const mapStateToProps = (state, todo_id) => ({
  steps: stepsByTodoId(state, todo_id),
  errors: state.errors,
  todo_id: todo_id.todo_id

});

const mapDispatchToProps = dispatch =>({
  createStep: (step) => dispatch(StepActions.createStep(step)),
  deleteStep: (step) => dispatch(StepActions.deleteStep(step)),
  updateStep: (step) => dispatch(StepActions.updateStep(step)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
