// path : social-post/src/pages/AddPost/index.page.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectPost, selectPostIsPosting, selectPostValue} from "../../store/selector/post-selector.js";
import {addPost, setPostValue} from "../../store/reducer/postReducer.js";
import Loader from "../../component/Loader/index.jsx";

const AddPostPage = () => {
 
 const dispatch = useDispatch()
 const post = useSelector(selectPostValue)
 const isPosting = useSelector(selectPostIsPosting)
 
 const handleChange = (e) => {
  const {name, value} = e.target
  dispatch(setPostValue({name, value}));
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (!post.title || !post.body) return
  dispatch(addPost(post))
 }
 
 if (isPosting) return <div className="page" id="AddPost">
  <h2 className={"AddPost__title"}>Ajouter un post</h2>
  <Loader />
 </div>
 
 return <div className="page" id="AddPost">
  <h2 className={"AddPost__title"}>Ajouter un post</h2>
  <form className={"AddPost__form"} onSubmit={handleSubmit}>
   <input className={"AddPost__form__input"} type="text" onChange={handleChange} value={post.title} name={"title"} placeholder={"Titre"} />
   <textarea className={"AddPost__form__textarea"} name={"body"} onChange={handleChange} value={post.body} placeholder={"Contenu"} />
   <button role={"button"} className={"AddPost__form__button"}>Envoyer</button>
  </form>
 </div>
}

export default AddPostPage