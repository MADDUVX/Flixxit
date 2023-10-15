import { useState } from "react";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import AdminHome from "./adminpages/home/Home";
import Movie from "./adminpages/movie/Movie";
import ListList from "./adminpages/listList/ListList";
import List from "./adminpages/list/List";
import NewList from "./adminpages/newList/NewList";
import MovieList from "./adminpages/movieList/MovieList";
import NewMovie from "./adminpages/newMovie/NewMovie";
import UserList from "./adminpages/userList/UserList";
import User from "./adminpages/user/User";
import NewUser from "./adminpages/newUser/NewUser";
import AdminLogin from "./adminpages/login/Login";
import Dashboard from "./adminpages/dashboard/DashBoard";

function App() {
  const { user, isAdmin} = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="login" />} />
        <Route path="movies" element={<Home type="movie" />} />
        <Route path="series" element={<Home type="series" />} />
        <Route path="watch" element={user ? <Watch /> : <Navigate to="/" />} />
        <Route
          path="register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="*" element={<h1>You're on Wrong Page</h1>} />
        //AdminDashboard Routes
        <Route path="/dashlogin" element={<AdminLogin />} />
        <Route
          path="dashboard"
          element={isAdmin?<Dashboard />: <Navigate to="/dashlogin"/>}
        >
          <Route path="home" element={<AdminHome />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="movies" element={<MovieList type="Movies" />} />
          <Route path="series" element={<MovieList type="Series" />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="newMovie" element={<NewMovie />} />
          <Route path="lists" element={<ListList />} />
          <Route path="list/:listId" element={<List />} />
          <Route path="newlist" element={<NewList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
