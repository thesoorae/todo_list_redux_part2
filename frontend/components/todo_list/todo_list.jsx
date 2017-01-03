import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={this.props.removeTodo}
              receiveTodo={this.props.receiveTodo}/>
          ))}
      </ul>
      <TodoForm receiveTodo={this.props.receiveTodo}/>

      </div>
  );}
}

export default TodoList;
