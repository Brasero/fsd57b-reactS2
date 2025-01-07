import {replace, useNavigate, useParams} from "react-router-dom";
import {posts} from "../constant/post.js";

const Detail = () => {
 
 const {id} = useParams()
 const post = posts.find((post) => post.id === parseInt(id))
 
 const navigate = useNavigate()
 
 const handleGoback = () => {
  navigate(-1)
 }
 
 const goHome = () => {
  navigate("/", {replace: true})
 }
 
 return post ? <>
   <h2>Titre : {post.title} <small>ID : {post.id}</small></h2>
   <p>Description : {post.description}</p>
   <p>Contenu : {post.content}</p>
   <button onClick={handleGoback}>Retour</button>
  </>
  :
  <>
   <p>Aucun post à afficher</p>
   <button onClick={goHome}>Retour à l'accueil</button>
  </>
 
}

export default Detail