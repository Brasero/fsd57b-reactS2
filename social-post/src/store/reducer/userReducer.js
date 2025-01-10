import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import useApi from "../../service/api.service.jsx";

const api = useApi()

const initialState = {
 user: {
  id: null, name: "", username: "", email: ""
 }, isLoading: false, isErrored: false, errorMessage: ""
}

export const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
 try {
  const res = await api.getUserById(1)
  return res.data
 } catch (e) {
  thunkAPI.rejectWithValue(e.message)
 }
})

const userSlice = createSlice({
 name: "user", initialState, reducers: {}, extraReducers: (builder) => {
  builder.addCase(fetchUser.fulfilled, (state, action) => {
   const {id, name, username, email} = action.payload
   state.user.id = id
   state.user.name = name
   state.user.username = username
   state.user.email = email
   state.isLoading = false
   state.isErrored = false
   state.errorMessage = ""
  })
   .addCase(fetchUser.pending, (state) => {
    state.isLoading = true
   })
   .addCase(fetchUser.rejected, (state, action) => {
    state.isErrored = true
    state.errorMessage = action.payload
   })
 }
})


export default userSlice.reducer