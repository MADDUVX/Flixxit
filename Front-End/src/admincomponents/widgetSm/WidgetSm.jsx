import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect,useContext} from "react";
import { UserContext } from "../../context/usercontext/UserContext";
import { getusers} from "../../context/usercontext/apiCalls";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WidgetSm() {

  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getusers(dispatch);
  }, [dispatch]);

 /* const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/api/users/findall?new=true", {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);*/
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <Link
            to={`/dashboard/user/${user._id}`} state={{user:user}}
          >
            <button className="widgetSmButton">
           
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
