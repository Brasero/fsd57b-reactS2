import {useUserContext} from "../context/UserContext.jsx";

const Users = () => {
 const [state] = useUserContext()
 const {users} = state

 return <ul>
  {
   users.length ? (
    users.map((user, i) => {
     return <li key={i}>{user}</li>
    })
   ) : (
    <p style={{color: 'yellow'}}>Aucun utilisateur enregistré.</p>
   )
  }
 </ul>
}

export default Users;