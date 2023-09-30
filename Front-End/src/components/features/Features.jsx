import React from "react";
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./features.css";

function Features({type}) {
  return (
    <div className="features">
      {type && (<div className="category">
        <span>{type==="movie"?"Movies":"Series"}</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="crime">Crime</option>
          </select>
      </div>)}
      <img
        src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE"
        alt="University"
      />
      <div className="info">
        <img  src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE" alt="" />
        <span className="desc">
        loremadsafsjkjkdkjvdsjkdsjvkdsdskjhvdskvkdsv
        hjddskjfkdsfjdskfdskdsjkbvbvjsdkvkdjbvkdjb
        </span>
        <div className="buttons">
        <button className="play">
        <PlayArrow/>
        <span>Play</span>
        </button>
        <button className="more-info">
        <InfoOutlinedIcon/>
        <span>info</span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
