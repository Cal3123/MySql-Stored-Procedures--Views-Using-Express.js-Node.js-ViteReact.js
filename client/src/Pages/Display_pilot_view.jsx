import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Table from "../Components/Table/Table"

function Display_pilot_view() {
    const [pilotView, sePilotView] = useState([]);
    const [notification, setNotification] = useState("");
    
    const getPilots = () => {
      Axios.get("http://localhost:3001/display_pilot_view").then((response) => {
        if(response.data.message === "Get Error") {
          setNotification("Get Error")
        } else {
            sePilotView(response.data);
        }     
      });
    };
 
    const colNames = ["Username", "License ID", "Experience", "Drone Count", "Location Count"];
    return (
      <>
        <div className="App">
          <h1 >  Display Pilot View </h1>
          <h2>{notification}</h2>
          <div className="employees">
            <button onClick={getPilots}>Show Pilots</button>
          </div>
      </div>
      <Table list={pilotView} colNames={colNames} />
      </>
    );  
  }
export default Display_pilot_view;