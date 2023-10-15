import React, { useEffect } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./features.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Features({ type, setGenre }) {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const contResp = await axios.get("/api/movies/random?type="+type, {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(contResp.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="features">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
            <option value="">Genre</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt="not available"
      />
      <div className="info">
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
        <Link to="/watch" state={{ movie:content}} className="link">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          </Link>
          <button className="more-info">
            <InfoOutlinedIcon />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
