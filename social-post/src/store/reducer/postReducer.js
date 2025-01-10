import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import useApi from "../../service/api.service.jsx";

const api = useApi();

const initialState = {
 posts: {
  isLoading: false,
  isErrored: false,
  errorMessage: "",
  data: []
 },
 post: {
  isPosting: false,
  isErrored: false,
  errorMessage: "",
  data: {
   userId: 1,
   title: "",
   body: ""
  }
 }
}

export const getPosts = createAsyncThunk(
 "posts/fetchPosts",
 async (_, thunkAPI) => {
  thunkAPI.dispatch(setIsLoadingPost(true))
  try {
   const res = await api.getPostsApi()
   return res.data
  } catch (e) {
   thunkAPI.rejectWithValue(e.message)
  }
 }
)

export const getPostUser = createAsyncThunk(
 "posts/fetchPostUser",
 async ({postId, userId}, thunkAPI) => {
  try {
   const res = await api.getUserById(userId)
   return {postId, user: res.data}
  } catch (e) {
   thunkAPI.rejectWithValue(e.message)
  }
 }
)

export const getPostComments = createAsyncThunk(
 "posts/fetchPostComments",
 async (postId, thunkAPI) => {
  const res = await api.getPostComments(postId)
  return {postId, comments: res.data}
 }
 )

export const postComment = createAsyncThunk(
 "posts/postComment",
 async (comment, thunkAPI) => {
  try {
   const res = await api.postCommentApi(comment)
   return res.data
  } catch (e) {
   thunkAPI.rejectWithValue(e.message)
  }
 }
)

export const addPost = createAsyncThunk(
 "posts/addPost",
 async (post, thunkAPI) => {
  thunkAPI.dispatch(setIsPosting(true))
  try {
   const res = await api.addPostApi(post)
   return res.data
  } catch (e) {
   thunkAPI.rejectWithValue(e.message)
  }
 
 }
)

const postsSlice = createSlice({
 name: "posts",
 initialState,
 reducers: {
  setPostValue (state, action) {
   state.post.data[action.payload.name] = action.payload.value
   state.post.isErrored = false
   state.post.errorMessage = ""
  },
  setIsPosting(state, action) {
   state.post.isPosting = action.payload
  },
  setIsLoadingPost(state, action) {
   state.posts.isLoading = action.payload
  },
  setPostError(state, action) {
   state.post = {
    ...state.post,
    isErrored: true,
    errorMessage: action.payload
   }
  }
 },
 extraReducers: (builder) => {
  builder.addCase(
   getPosts.fulfilled,
   (state, action) => {
    state.posts = {
     ...state.posts,
     data: action.payload,
     errorMessage: "",
     isErrored: false,
     isLoading: false
    }
   }
  )
   .addCase(
    getPosts.rejected,
    (state, action) => {
     state.posts = {
      ...state.posts,
      data: [],
      isErrored: true,
      errorMessage: action.payload,
      isLoading: false
     }
    }
   )
   .addCase(
    getPostUser.fulfilled,
    (state, action) => {
     const postIndex = state.posts.data.findIndex(post => post.id === action.payload.postId)
     state.posts.data[postIndex].user = action.payload.user
    }
   )
   .addCase(
    getPostComments.fulfilled,
    (state, action) => {
     const postIndex = state.posts.data.findIndex(post => post.id === parseInt(action.payload.postId))
     state.posts.data[postIndex].comments = action.payload.comments
    }
   )
   .addCase(
    postComment.fulfilled,
    (state, action) => {
     const postIndex = state.posts.data.findIndex(post => post.id === action.payload.postId)
     state.posts.data[postIndex].comments.push(action.payload)
    }
   )
   .addCase(
    addPost.fulfilled,
    (state, action) => {
     state.posts.data.push(action.payload)
     state.post.isPosting = false
     state.post.data = {
      userId: 1,
      title: "",
      body: ""
     }
    }
   )
 }
})

export const {
 setPostValue,
 setIsPosting,
 setIsLoadingPost,
 setPostError
} = postsSlice.actions

export default postsSlice.reducer