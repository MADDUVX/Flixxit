import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.css";
import { useState } from "react";

function ListItem({ index }) {
  const [isHovered, setisHovered] = useState(false);

  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="list-item"
      style={{ left: (isHovered&&index!==0)? index * 225 - 50 + index * 8:0}}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
   
    <img
      src="https://th.bing.com/th/id/R.390b0e5bc6bd5a6dc299a4b0c6d0ac51?rik=rx6JxgUeISaxTg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2faquaman-new-2r.jpg&ehk=330XIFPN2mTshFitLiLwGjbwoZyppg4mtiSoAFY67Tw%3d&risl=&pid=ImgRaw&r=0"
      alt="Aquaman"
    />
      {isHovered && (
        <>
          <video  controls autoPlay={true} loop>
          <source src={trailer} type="video/mp4"/>
          </video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="list-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum assumenda sapiente illum.
            </div>
            <div className="genre">Action</div>
          </div>
        </>)
      }
    </div>
  );
}

export default ListItem;
