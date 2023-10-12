import { useState } from 'react'
import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import './App.css';
import { Routes, Route,Navigate} from "react-router-dom";

function App() {
const user = true;
  return (
    <>
    <Routes>
    <Route path="/" element={user?<Home/>:<Navigate to="register"/>}/>
    <Route path="movies" element={<Home type="movies"/>}/>
    <Route path="series" element={<Home type="series"/>}/>
    <Route path="watch" element={user?<Watch/>:<Navigate to="/"/>}/>
    <Route path="register" element={!user?<Register/>:<Navigate to="/"/>}/>
    <Route path="login" element={!user?<Login/>:<Navigate  to="/"/>}/>
    <Route path="*" element={<h1>You're on Wrong Page</h1>}/>
    </Routes>
    </>
  )
}

export default App
