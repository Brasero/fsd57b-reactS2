// path: social-post/src/component/PostItem/index.jsx
import "./style.scss";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPostUser} from "../../store/reducer/postReducer.js";
import Loader from "../Loader/index.jsx";

const PostItem = ({post}) => {
 const dispatch = useDispatch()
 
 useEffect(() => {
  dispatch(getPostUser({postId: post.id, userId: post.userId}))
 }, [])
 
 return (<div className="PostItem">
   <h3 className={"PostItem__title"}>{post.title}</h3>
   <p className={"PostItem__body"}>{post.body}</p>
  <div className="PostItem__footer">
   {post.user ?<p className={"PostItem__author"}>Posté par {post.user.name} </p>: <Loader/>}
   <Link className={"PostItem__link"} to={`/post/${post.id}`}>Voir le post</Link>
  </div>
 </div>)
}

export default PostItem