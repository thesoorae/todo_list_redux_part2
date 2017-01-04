import React from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
    console.log('List props:', props);
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.steps.map((step, i) => (
            <StepListItem
              key={step.id}
              step={step}
              deleteStep={this.props.deleteStep}
              updateStep={this.props.updateStep}/>
          ))}
        </ul>
        <StepForm
          todo_id={this.props.todo_id}
          errors={this.props.errors}
          createStep={this.props.createStep}
          clearErrors={this.props.clearErrors}
          />

      </div>
    );
  }
}
export default StepList;
