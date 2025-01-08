import {useSelector} from "react-redux";
import {selectDragons} from "../store/selector/dragonSelector.js";

const List = () => {
 
 const dragons = useSelector(selectDragons)
 
 return (<>
   <h2>Liste</h2>
  {
   dragons.length ?
    <ul>
     {
      dragons.map(dragon => <li key={dragon.id}>{dragon.name}</li>)
     }
    </ul>
    :
    <p>Aucun dragon dans la liste</p>
  }
 </>)
}

export default List