import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.css";
import { useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function ListItem({ index, item }) {

  const [movDetails, setMovDetails]= useState({});// We need to initialize state with empty object {} or array [] so we can avoid undefined error
  const [isHovered, setisHovered] = useState(false);
  useEffect(()=>{
    const getMovie= async()=>{
      try{
        const itemResp = await axios.get("api/movies/find/"+item,
          { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTg4Y2I2MTU3MTU5MGM1ZjllZWIxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzA1MTgwNCwiZXhwIjoxNjk3MDYyNjA0fQ.0inCM1ABLiP3o_wIK1TIbE2M_2NJid01XU2xJfqukXw" } }
        )
        setMovDetails(itemResp.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getMovie();
  },[item])

  //Aquaman sample img
  //https://th.bing.com/th/id/R.390b0e5bc6bd5a6dc299a4b0c6d0ac51?rik=rx6JxgUeISaxTg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2faquaman-new-2r.jpg&ehk=330XIFPN2mTshFitLiLwGjbwoZyppg4mtiSoAFY67Tw%3d&risl=&pid=ImgRaw&r=0
  


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
      alt={movDetails.imgTitle}
    />
      {isHovered && (
        <>
        <Link to="/watch" state={{ movie:movDetails}}>
          <video  controls autoPlay={true} loop>
          <source src={movDetails.trailer} type="video/mp4"/>
          </video>
          </Link>
          <div className="itemInfo">
            <div className="icons">
            <Link to="/watch" state={{ movie:movDetails}}>
              <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">{movDetails.limit}</span>
              <span>{movDetails.year}</span>
            </div>
            <div className="list-desc">
              {movDetails.desc}
            </div>
            <div className="genre">{movDetails.genre}</div>
          </div>
        </>)
      }
    </div>
  );
}

export default ListItem;
