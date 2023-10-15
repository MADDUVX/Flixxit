import "./home.css";
import NavBar from "../../components/navbar/NavBar";
import Features from "../../components/features/Features";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre]= useState("");

  useEffect(() => {
    const getLists = async () => {
      try {
        
        const listResp = await axios.get(`/api/list${type?"?type="+type:""}${genre ?"&genre="+genre:""}`,
          { headers: {  Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
      );

        setLists(listResp.data)
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Features type={type} setGenre={setGenre}/>
      {lists.map((list)=>(
        <List list={list}/>)
      )}
    </div>
  );
};

export default Home;
