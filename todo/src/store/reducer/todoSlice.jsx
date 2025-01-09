import {createAsyncThunk, createSlice, prepareAutoBatched} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchTodo = createAsyncThunk("todo/fetch", async () => {
 const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
 return res.data;
})

export const completeTodo = createAsyncThunk("todo/complete",
  async (payload, thunkAPI) => {
   const todo = thunkAPI.getState().todoSlice.todos.find((todo) => todo.id === payload)
   const updatedTodo = {...todo, completed: !todo.completed}
   const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, updatedTodo)
   return res.data
  }
 )

export const addTodo = createAsyncThunk(
 "todo/add",
 async (payload) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/todos", payload)
  return res.data
 }
)

const todoSlice = createSlice({
 name: "todo", initialState: {
  todos: [],
  loadingTodo: false,
  updateTodo: false
 },
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchTodo.pending, (state, action) => {
   state.loadingTodo = true
  })
  builder.addCase(fetchTodo.fulfilled, (state, action) => {
   state.loadingTodo = false
   state.todos = action.payload
  })
  
  builder.addCase(completeTodo.pending, (state, action) => {
   state.updateTodo = true
  })
  builder.addCase(completeTodo.fulfilled, (state, action) => {
   state.updateTodo = false
   state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
  })
  
  builder.addCase(addTodo.fulfilled, (state, action) => {
   state.todos.push({...action.payload, id: state.todos.length + 1})
  })
 }
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;