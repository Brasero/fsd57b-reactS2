const Numbers = ({numbers = []}) => {
 
 return (
  numbers.length ? <ul>
   {
    numbers.map((num, i) => {
     return <li key={i}>{num}</li>
    })
   }
  </ul> : <p>Aucune valeur sélectionnée</p>
 )
}


export default Numbers