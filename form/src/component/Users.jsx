const Users = ({users = []})=> {

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