import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: this.props.step,
    };

    this.toggleDone = this.toggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (e) {
  e.preventDefault();
  this.props.deleteStep(this.props.step);
}

  toggleDone (e) {
    e.preventDefault();
    // debugger
    let donestep = this.props.step;
    donestep.done = !donestep.done;
    this.props.updateStep(donestep);
  }



  render () {
    let doneStatus =  this.props.step.done ? "Undo" : "Done";
    let detailView = this.state.detail ? <StepDetailView step_id={this.state.step.id}/> : <div></div>;
    return (
      <div>
        <li>
          <div>
          <h3>{this.props.step.title}</h3>
          <p>{this.props.step.body}</p>

          <button onClick={this.toggleDone}>{doneStatus}</button>
            <button onClick={this.handleDelete}>Remove</button>

          </div>
        <div>
            {detailView}
        </div>
      </li>

      </div>

    );
  }
}

export default StepListItem;
