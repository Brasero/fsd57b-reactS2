// path : social-post/src/pages/Post/index.page.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectPostById} from "../../store/selector/post-selector.js";
import {Link, Navigate, useParams} from "react-router-dom";
import Loader from "../../component/Loader/index.jsx";
import {useEffect, useState} from "react";
import {getPostComments, postComment} from "../../store/reducer/postReducer.js";
import {selectUser} from "../../store/selector/user-selector.js";

const PostPage = () => {

 
 const {id} = useParams()
 const post = useSelector(selectPostById(id))
 const user = useSelector(selectUser)
 const dispatch = useDispatch()
 const [comment, setComment] = useState({
  body: "",
  postId: "",
  userId: ""
 })
 useEffect(() => {
  if (!post.comments) {
   dispatch(getPostComments(post.id))
  }
 }, []);
 
 const handleChange = (e) => {
  setComment({...comment, [e.target.name]: e.target.value})
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (!comment.body) return
  dispatch(postComment({
   ...comment,
   postId: post.id,
   userId: user.id
  }))
  setComment({body: "", postId: "", userId: ""})
 }
 
 if (!post) return <Navigate to={"/"}/>
 
 return <div className="page" id="Post">
  <Link to={"/"}>Retour</Link>
  <h2 className={"Post__title"}>{post.title}</h2>
  <p className={"Post__body"}>{post.body}</p>
  {post.user ? <p className={"Post__author"}>Posté par {post.user.name}</p> : <Loader/>}
  <p className={"Post__commentTitle"}>Commentaires</p>
  <ul className={"Post__comments"}>
   {post.comments ? post.comments?.map(comment => {
    return <li key={comment.id}>{comment.body}</li>
   }) : <Loader/>}
  </ul>
  <p className={"Post__addCommentTitle"}>Ajouter un commentaire</p>
  <form className={"Post__comment"} onSubmit={handleSubmit}>
   <textarea className={"Post__comment__input"} name={"body"} onChange={handleChange} value={comment.body} />
   <button className={"Post__comment__button"}>Envoyer</button>
  </form>
 </div>
}

export default PostPage