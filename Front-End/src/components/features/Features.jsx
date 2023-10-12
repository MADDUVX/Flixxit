import React, { useEffect } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./features.css";
import { useState } from "react";
import axios from "axios";

function Features({ type }) {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const contResp = await axios.get("/api/movies/random?"+type, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTg4Y2I2MTU3MTU5MGM1ZjllZWIxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzEyMzQzMCwiZXhwIjoxNjk3MTM0MjMwfQ.S_w-Hjlh9ExahMYwokQ0EtKaaJJuWsY-7c32QFTKXWU",
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
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="crime">Crime</option>
          </select>
        </div>
      )}
      <img
        src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE"
        alt={content.imgTitle}
      />
      <div className="info">
        <img
          src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE"
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
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
