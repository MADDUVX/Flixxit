

//import { AuthContext } from "./context/authContext/AuthContext";
import { Outlet } from 'react-router-dom';
import Topbar from '../../admincomponents/topbar/Topbar';
import Sidebar from '../../admincomponents/sidebar/Sidebar';
import React from 'react'
import "./dashboard.css";

function Dashboard() {
  return (
    <>
    <Topbar />
    <div className="dashboard">
    <Sidebar />
    <Outlet/>
    </div>
    </>
      );

    };

export default Dashboard;