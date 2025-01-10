import axios from "axios";

const api = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com/"
})

const useApi = () => {
 
 const getUserById = async (id) => {
  return await api.get(`/users/${id}`)
 }
 const getPostsApi = async () => {
  return await api.get("/posts")
 }
 
 const getPostComments = async (postId) => {
  return await api.get(`/posts/${postId}/comments`)
 }
 
 
 const getCommentsApi = async () => {
  return await api.get("/comments")
 }
 
 const postCommentApi = async (comment) => {
  return await api.post("/comments", comment)
 }
 
 const addPostApi = async (post) => {
  return await api.post("/posts", post)
 }
 
 return {
  getUserById,
  getPostsApi,
  getCommentsApi,
  getPostComments,
  postCommentApi,
  addPostApi
 }
}

export default useApi