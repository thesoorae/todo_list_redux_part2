import React from 'react';
import {removeTodo} from '../../actions/todo_actions';
import StepList from '../step_list/step_list_container.jsx';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
    console.log('Detail props:', props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (e) {
  e.preventDefault();
  this.props.deleteTodo(this.props.todo);
}

  render(){
  return <div>
    <StepList todo_id={this.props.todo_id}/>
    <button onClick={this.handleDelete}>Remove</button>
  </div>;
  }
}

export default TodoDetailView;
