
export const allTodos = (state) => {
  let id_array = [];
  for(let key in state.todos){
    id_array.push(state.todos[key]);
  }
  // let id_array = Object.keys(state.todos);
  // let todos = id_array.map((id) => (state.todos[id]));
  // console.log(todos);
  // return todos;
  return id_array;
};

export const stepsByTodoId = (state, { todo_id }) => {
  // state.steps.filter(step => step.todo_id === todoId);
  let steps = [];
  for(let key in state.steps){
    if (state.steps[key].todo_id === todo_id) steps.push(state.steps[key]);
  }
  return steps;
};

window.stepsByTodoId = stepsByTodoId;
