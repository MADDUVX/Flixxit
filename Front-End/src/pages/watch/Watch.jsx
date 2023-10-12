import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import "./watch.css";
import { Link, useLocation } from 'react-router-dom';

function Watch() {
  const location = useLocation(); //returns current location object
  const movie = location.state.movie;

  return (
    <div className='watch'>
    <Link to="/">
    <div className="backbutton">
        <ArrowBackOutlined/>
        <span>Home</span>
    </div>
    </Link>
    <video className="video" autoPlay controls progress src={movie.trailer}/>
    </div>
  )
}

export default Watch