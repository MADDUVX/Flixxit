import "./home.css";
import NavBar from "../../components/navbar/NavBar";
import Features from "../../components/features/Features";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getLists = async () => {
      try {
        
        const listResp = await axios.get(`/api/list${type?"?type="+type:""}${genre ?"&genre="+genre:""}`,
          { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTg4Y2I2MTU3MTU5MGM1ZjllZWIxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzEyMzQzMCwiZXhwIjoxNjk3MTM0MjMwfQ.S_w-Hjlh9ExahMYwokQ0EtKaaJJuWsY-7c32QFTKXWU" } }
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
      <Features type={type} />
      {lists.map((list)=>(
        <List list={list}/>)
      )}
    </div>
  );
};

export default Home;
