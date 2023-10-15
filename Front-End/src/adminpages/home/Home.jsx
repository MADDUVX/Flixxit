import Chart from "../../admincomponents/chart/Chart";
import FeaturedInfo from "../../admincomponents/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../admincomponents/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/api//users/stats", {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
   
        <div className="content">
         {/* <FeaturedInfo />-Implement Later*/}
          <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
          <div className="homeWidgets">
            <WidgetSm />
            
          </div>
        
      </div>
  
  );
}
