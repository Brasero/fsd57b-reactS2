import {useNavigate, useParams} from "react-router-dom";

const User = () => {
 
 const {name} = useParams()
 const navigate = useNavigate()
 
 
 const handleClick = () => {
  // permet de naviguer de manière programmatique
  navigate("/", {replace: true}
   // -1 permet de revenir de 1 page dans l'historique
  )
 }
 
 return <>
  <h2>User</h2>
  <p>Bienvenue, {name}</p>
  <button onClick={handleClick}>Go back</button>
 </>
}

export default User