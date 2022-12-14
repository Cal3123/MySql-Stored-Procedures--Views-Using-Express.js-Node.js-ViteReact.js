import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Table from "../Components/Table/Table"
import { Location } from "../Components/Form";

function Add_restaurant() {
    const [ip_long_name, setLongName] = useState("");
    const [ip_rating, setRating] = useState(0);
    const [ip_spent, setSpent] = useState(0);
    const [ip_location, setLocation] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [notification, setNotification] = useState("");
    const colNames = ["Long Name", "Rating", "Spent", "Location"];


    
    const addRestaurant = () => {
      if (ip_long_name.length < 1) {
        setNotification("Please Specify a Restaurant Name");
      } else if (ip_rating === null) {
        setNotification("Please Specify a Restaurant Rating");
      } else if (ip_rating < 1 || ip_rating > 5) {
        setNotification("Invalid Restaurant Rating");
      } else if (ip_spent < 0) {
        setNotification("Invalid Spending Amount");
      } else if (ip_location.length < 1) {
        setNotification("Please Select a Valid Location");
      } else {
          Axios.post("http://localhost:3001/add_restaurant", {
            ip_long_name : ip_long_name,
            ip_rating : ip_rating,
            ip_spent : ip_spent,
            ip_location : ip_location,
          }).then((res) => {
              setNotification(res.data.message)
          });
      }
  
    };
  
    const getRestaurants = () => {
      Axios.get("http://localhost:3001/add_restaurant").then((response) => {
        if(response.data.message === "Get Error") {
          setNotification("Get Error")
        } else {
          setRestaurants(response.data);
        }
        
      });
    };
 
    const TableNames = ["long_name", "rating", "spent", "location", "funded_by"]
    return (
      <>
        <div className="App">
          <h1 >  Add Restaurant Procedure </h1>
          <h2>{notification}</h2>
          <div className="information">
            <label>{colNames[0]}:</label>
            <input
              type="text"
              onChange={(event) => {
                setLongName(event.target.value);
              }} maxLength="40" minLength="1"
            />
            <label>{colNames[1]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setRating(event.target.value);
              }} min="1" max="5" step="1"
            />
            <label>{colNames[2]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setSpent(event.target.value);
              }} min="0" step="1"
            />
            <label>{colNames[3]}:</label>
            <Location name="location" onChange={(event) => {setLocation(event.target.value);}} />
            <button onClick={addRestaurant}>Add Restaurant</button>
            <button onClick={getRestaurants}>Show Restaurants</button>
          </div>
      </div>
      <Table list={restaurants} colNames={TableNames}/>
      </>
    );  
  }
export default Add_restaurant;