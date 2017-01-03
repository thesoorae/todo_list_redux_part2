export const fetchAllTodos = () => $.ajax({
  method: 'GET',
  url: '/api/todos'
});
