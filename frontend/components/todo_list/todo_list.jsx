import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchTodos();
    this.props.fetchAllSteps();
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              updateTodo={this.props.updateTodo}/>
          ))}
        </ul>
        <TodoForm
          errors={this.props.errors}
          createTodo={this.props.createTodo}
          clearErrors={this.props.clearErrors}/>

      </div>
  );}
}

export default TodoList;
