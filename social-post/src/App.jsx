import './App.scss'
import NavBar from "./component/NavBar/index.jsx";
import HomePage from "./pages/Home/index.page.jsx";
import {Route, Routes} from "react-router-dom";
import PostPage from "./pages/Post/index.page.jsx";
import {useEffect} from "react";
import {fetchUser} from "./store/reducer/userReducer.js";
import {getPosts} from "./store/reducer/postReducer.js";
import {useDispatch} from "react-redux";
import AddPostPage from "./pages/AddPost/index.page.jsx";

function App() {
 
 const dispatch = useDispatch()
 
 useEffect(() => {
  dispatch(fetchUser())
  dispatch(getPosts())
 }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/post/:id"} element={<PostPage />} />
       <Route path={"/addPost"} element={<AddPostPage />} />
      </Routes>
    </>
  )
}

export default App