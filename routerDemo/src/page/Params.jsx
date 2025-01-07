import {useSearchParams} from "react-router-dom";

const Params = () => {
 
 const [searchParams, setSearchParams] = useSearchParams()
 
 for (const [key, value] of searchParams) console.log(key,value)
 
 return <>
  
  <h2>Params</h2>
  <p>
   Name : , <br/>
   Age :
  </p>
  
 </>
}

export default Params