import React from 'react';

class StepForm extends React.Component {
  constructor(props){
    super(props);
    console.log("Form props:", props);
    this.state = {
      title: "",
      body: "",
      todo_id: this.props.todo_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit (e) {
    // debugger
    e.preventDefault();
    this.props.createStep(this.state).then(() => {
      this.props.clearErrors();
      this.setState({
      title: "",
      body: ""
      });
    }
  );}

  updateTitle(e) {

    this.setState({title: e.target.value});
  }

  updateBody(e) {
      this.setState({body: e.target.value});
    }

  render () {
    return (<form onSubmit={this.handleSubmit}>
      <ul>
        {this.props.errors.map(e => <li key={e}>{e}</li>)}
      </ul>
      Title<input type="text" value={this.state.title} onChange={this.updateTitle}></input>
      <br />
      Body<input type="text" value={this.state.body} onChange={this.updateBody}></input>

      <button>Add task</button>

    </form>);
  }
}

export default StepForm;
