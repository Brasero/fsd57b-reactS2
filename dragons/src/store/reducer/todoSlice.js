import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
 todos: []
}

export const fetchTodo = createAsyncThunk("todo/fetch", async () => {
 const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
 return res.data;
})

const todoSlice = createSlice({
 name: "todo",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchTodo.fulfilled, (state, action) => {
   state.todos = action.payload;
  })
 }
})

export default todoSlice.reducer