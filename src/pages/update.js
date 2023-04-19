import React from "react";
import SideBar from "../Sidebar/sidebar";
import "../pages/components.scss";
import { useState } from "react";
  
const Update = () => {

    const [iName, setiName] = useState ("");

    function updateItem() {
        let data = {
          "name" : iName
        }
        console.log(data)
    
        fetch(`http://127.0.0.1:5000/updateitem`, {
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
                    Update values in 'ITEM' table
                </h2>
                <div className="col-md-3">
                    <span>Enter New Item Name you want the previous added :</span>
                    <input
                        className=""
                        type="text"
                        placeholder="Item Name"
                        required
                        onChange={e => setiName(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={updateItem} className="submit-btn">Update</button>
            </div>
        </div>
    </div>
  );
};
  
export default Update;