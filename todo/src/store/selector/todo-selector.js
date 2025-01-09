export const selectTodo = (state) => state.todoSlice.todos;
export const selectTodoLoadingState = state => state.todoSlice.loadingTodo;
export const selectTodoUpdateState = state => state.todoSlice.updateTodo;