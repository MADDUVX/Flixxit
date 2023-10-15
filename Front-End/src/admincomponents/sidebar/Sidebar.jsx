import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  PlayCircleOutline,
  List,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  AddToQueue,
  QueuePlayNext,
  ArrowBackIosNewOutlined
} from "@mui/icons-material"
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Sidebar() {

  const [active , setActive]= useState(null);

  const handleclick =()=>{
      

  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/home" className="link">
              <li className={`sidebarListItem ${active==="Home"?'active':''}`} onClick={()=>setActive("Home")}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/users" className="link">
              <li className={`sidebarListItem ${active==="Users"?'active':''}`} onClick={()=>setActive("Users")}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/dashboard/movies" className="link">
              <li className={`sidebarListItem ${active==="Movies"?'active':''}`} onClick={()=>setActive("Movies")}>
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/dashboard/series" className="link">
            <li className={`sidebarListItem ${active==="Series"?'active':''}`} onClick={()=>setActive("Series")}>
              <PlayCircleOutline className="sidebarIcon" />
              Series
            </li>
          </Link>
            <Link to="/dashboard/lists" className="link">
              <li className={`sidebarListItem ${active==="Lists"?'active':''}`} onClick={()=>setActive("Lists")}>
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/dashboard/newMovie" className="link">
              <li className={`sidebarListItem ${active==="AddMovie"?'active':''}`} onClick={()=>setActive("AddMovie")}>
                <AddToQueue className="sidebarIcon" />
                Add Movie/Series
              </li>
            </Link>
            <Link to="/dashboard/newList" className="link">
              <li className={`sidebarListItem ${active==="AddList"?'active':''}`} onClick={()=>setActive("AddList")}>
                <QueuePlayNext className="sidebarIcon" />
                Add List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className={`sidebarListItem ${active==="Mail"?'active':''}`} onClick={()=>setActive("Mail")}>
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className={`sidebarListItem ${active==="Feedback"?'active':''}`} onClick={()=>setActive("Feedback")}>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className={`sidebarListItem ${active==="Messages"?'active':''}`} onClick={()=>setActive("Messages")}>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Return</h3>
        <Link to={"/"} className="link">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <ArrowBackIosNewOutlined className="sidebarIcon" />
            Back To App
          </li>
        </ul>
        </Link>
        </div>
      </div>
    </div>
  );
}
