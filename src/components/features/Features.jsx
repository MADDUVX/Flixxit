import React from "react";
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./features.css";

function Features() {
  return (
    <div className="features">
      <img
        src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE"
        alt="University"
      />
      <div className="info">
        <img  src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/ucl_quad_1.png?itok=fl4E7RXE" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          iusto nisi facilis corrupti labore tempore exercitationem nesciunt
          odit cum velit eius, porro maiores dicta neque commodi. Quis quaerat
          debitis nulla.
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
