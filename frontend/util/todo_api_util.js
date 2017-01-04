export const fetchAllTodos = () => $.ajax({
  method: 'GET',
  url: '/api/todos'
});

export const createTodo = (todo) => $.ajax({
  method: 'POST',
  url: '/api/todos',
  data: { todo }
});

export const updateTodo = (todo) => $.ajax({
  method: 'PATCH',
  url: `/api/todos/${todo.id}`,
  data: { todo }
});

export const deleteTodo = (todo) => $.ajax({
  method: 'DELETE',
  url: `/api/todos/${todo.id}`
});

export const fetchAllSteps = () => $.ajax({
  method: 'GET',
  url: `/api/steps`
});

export const createStep = (step) => $.ajax({
  method: 'POST',
  url: `/api/todos/${step.todo_id}/steps`,
  data: { step }
});

export const updateStep = (step) => $.ajax({
  method: 'PATCH',
  url: `/api/todos/${step.todo_id}/steps/${step.id}`,
  data: { step }
});

export const deleteStep = (step) => $.ajax({
  method: 'DELETE',
  url: `/api/todos/${step.todo_id}/steps/${step.id}`
});
