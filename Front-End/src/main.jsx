import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx';
import { ListContextProvider } from './context/listContext/ListContext.jsx';
import { UserContextProvider } from './context/usercontext/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AuthContextProvider>
    <MovieContextProvider>
    <ListContextProvider>
    <UserContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContextProvider>
    </ListContextProvider>
    </MovieContextProvider>
    </AuthContextProvider>
    </React.StrictMode>
)
