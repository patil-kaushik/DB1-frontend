import React from "react";
import SideBar from "../Sidebar/sidebar";
import "../pages/components.scss";
  
const Delete = () => {

  function deleteItem() {
    let data = {
      "name" : "Carrot Sprouts"
    }
    fetch(`http://127.0.0.1:5000/deleteitem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    }).then((res) => res.json());
  }

  return (
    <div className="col-md-12">
        <SideBar />
        <div className="app-container ml-3">
            <div className="row">
              <h2>
                  Delete values from 'ITEM' table
              </h2>
                <div className="col-md-3">
                  Click the below button to delete the item you added recently  
                </div>
                <button type="submit" onClick={deleteItem} className="submit-btn">Delete</button>
            </div>
        </div>
    </div>
  );
};
  
export default Delete;