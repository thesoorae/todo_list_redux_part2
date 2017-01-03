import React from 'react';
import {uniqueId} from '../api_util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit (e) {
    // debugger
    e.preventDefault();
    this.props.receiveTodo(this.state);
    console.log('update state of form');
    this.setState({
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    });
  }

  updateTitle(e) {

    this.setState({title: e.target.value});
  }

  updateBody(e) {
      this.setState({body: e.target.value});
    }

  render () {
    return (<form onSubmit={this.handleSubmit}>
      Title<input type="text" value={this.state.title} onChange={this.updateTitle}></input>
      <br />
      Body<input type="text" value={this.state.body} onChange={this.updateBody}></input>
      <button>Add task</button>
    </form>);
  }
}

export default TodoForm;
