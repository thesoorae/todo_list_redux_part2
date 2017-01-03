import React from 'react';
import TodoDetailView from './todo_detail_view_container';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo,
      detail: false
    };

    this.toggleDone = this.toggleDone.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }


  toggleDone (e) {
    e.preventDefault();
    let donebutton = this.props.todo;
    donebutton.done = !donebutton.done;
    this.props.receiveTodo(donebutton);
  }
   showDetail(e){
      this.setState({detail: !this.state.detail});
   }


  render () {
    let doneStatus =  this.props.todo.done ? "Undo" : "Done";
    let detailView = this.state.detail ? <TodoDetailView todo_id={this.state.todo.id}/> : <div></div>;
    return (
      <div>
        <li>
          <div>
          <span onClick={this.showDetail}>{this.props.todo.title}</span>
          <button onClick={this.toggleDone}>{doneStatus}</button>
          </div>
        <div>
            {detailView}
        </div>
      </li>

      </div>

    );
  }
}

export default TodoListItem;
