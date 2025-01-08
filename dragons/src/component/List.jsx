import {useSelector} from "react-redux";
import {selectDragons} from "../store/selector/dragonSelector.js";
import DragonItem from "./DragonItem.jsx";

const List = () => {
 
 const dragons = useSelector(selectDragons)
 
 return (<>
   <h2>Liste</h2>
  {
   dragons.length ?
    <ul>
     {
      dragons.map(dragon => <DragonItem key={dragon.id} dragon={dragon} /> )
     }
    </ul>
    :
    <p>Aucun dragon dans la liste</p>
  }
 </>)
}

export default List