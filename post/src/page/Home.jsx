import {posts} from "../constant/post.js";
import {Link} from "react-router-dom";

const Home = () => {
 
 return <>
   <h2>Home</h2>
   <ul>
    {posts.map((post) => {
     return <li key={post.id}>
      <Link to={`/detail/${post.id}`}>{post.title}</Link>
     </li>
    })}
   </ul>
 </>
 
}


export default Home