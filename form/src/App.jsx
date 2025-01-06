import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./component/Form.jsx";
import Users from "./component/Users.jsx";

function App() {

  return (
    <>
      <h1>User List</h1>
      <Form />
      <Users />
    </>
  )
}

export default App