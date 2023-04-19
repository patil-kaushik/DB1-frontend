import React from "react";
import SideBar from "../Sidebar/sidebar";
import "../pages/components.scss";
import { useState } from "react";
  
const Display = () => {

  const [iId, setiId] = useState (null);
  const [iName, setiName] = useState (null);
  const [items, setItems] = useState(null);

  var  [showName, setshowiName] = useState (true);
  var [showID, setshowid] = useState(true);
  
  const getItems = async () => {
    let data = {
        "name" : iName,
        "id" : iId
      }
      console.log(data)
    const response = await fetch(
      `http://127.0.0.1:5000/getitem`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      }
    ).then((response) => response.json());
    setItems(response.data);
    console.log(response.data)
  };
  
  function displayItem() {
    getItems()
  }

  function itemIDset(val) {
    console.log(val)
    if (val) {
      console.log(false)
      setshowiName(false);
    }
    else {
      console.log(true)
      setshowiName(true);
    }
  }

  function itemNameset(val) {
    if(val){
      setshowid(false);
    }
    else {
      setshowid(true);
    }
  }

  return (
    <div className="col-md-12">
        <SideBar />
        <div className="app-container ml-3">
            <div className="row">
              <h2>
                  Display values from 'ITEM' table
              </h2>
              {showID && <div className="col-md-3">
                  <span>Enter Item ID: </span>
                  <input
                    className=""
                    type="text"
                    placeholder="Item ID"
                    required
                    onChange={e => itemIDset(e.target.value)}
                  />
                </div>}
              {showName && <div className="col-md-3">
                <span>Enter Item Name: </span>
                  <input
                    className=""
                    type="text"
                    placeholder="Item Name"
                    required
                    onChange={e => itemNameset(e.target.value)}
                  />
              </div>}
              <button type="submit" onClick={displayItem} className="submit-btn">Search</button>
            </div>
            {items && 
            <div>
              <span>Item ID: {items[0][0]}<br></br></span>
              <span>Item Name: {items[0][1]}<br></br></span>
              <span>Sprice: {items[0][2]}<br></br></span>
            </div>}
        </div>
    </div>
  );
};
  
export default Display;