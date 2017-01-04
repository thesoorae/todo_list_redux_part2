import React from 'react';
import {merge} from 'lodash';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      currentTag: "",
      title: "",
      body: "",
      tag_names: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);
  }

  handleSubmit (e) {
    // debugger
    e.preventDefault();
    let newstate = merge({},this.state);
    delete newstate['currentTag'];
    this.props.createTodo(newstate).then(() => {
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

  handleTagInput(e) {
    console.log(e.target.value);
    if(e.target.value.slice(-1) === " "){
      let newTag = this.state.currentTag;
      if (newTag !== "" && !this.state.tag_names.includes(newTag)) {
        let new_tag_names = this.state.tag_names.concat([newTag]);
        this.setState({
          tag_names: new_tag_names,
          currentTag:""
        });
      }
    } else{
      this.setState({currentTag: e.target.value});
    }
  }

  render () {
    return (<form onSubmit={this.handleSubmit}>
      <ul>
        {this.props.errors.map(e => <li key={e}>{e}</li>)}
      </ul>
      Title<input type="text" value={this.state.title} onChange={this.updateTitle}></input>
      <br />
      Body<input type="text" value={this.state.body} onChange={this.updateBody}></input>
    Tags <input type="text" value={this.state.currentTag} onChange={this.handleTagInput}></input>
    <ul>
      {this.state.tag_names.map((tag, idx) => <li key={tag}>{tag}</li>)}
    </ul>
    <button>Add task</button>


    </form>);
  }
}

export default TodoForm;
