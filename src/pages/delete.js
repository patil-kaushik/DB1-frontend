//Team Members:
// Kaushik Patil - 1001928970
// Vivek Yelethotadahalli Srinivas - 1002064152
import React from "react";
import "../pages/components.scss";
import { useState } from "react";
  
const Delete = () => {

  const [iName, setiName] = useState ("");

  function deleteItem() {
    let data = {
      "name" : iName
    }
    fetch(`http://127.0.0.1:5000/deleteitem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    }).then((res) => {
      res.json();
      alert("Deleted Successfully");
    });
  }

  return (
    <div className="col-md-12">
        <div className="app-container ml-3">
            <div className="row">
              <h2>
                  Delete values from 'ITEM' table
              </h2>
              <div className="col-md-3">
                    <span>Enter Item Name to be Deleted :</span>
                    <input
                        className=""
                        type="text"
                        placeholder="Item Name"
                        required
                        onChange={e => setiName(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={deleteItem} className="submit-btn">Delete</button>
            </div>
        </div>
    </div>
  );
};
  
export default Delete;