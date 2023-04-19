import React from "react";
import SideBar from "../Sidebar/sidebar";
import "../pages/components.scss";
import { useState } from "react";
  
const Insert = () => {

  const [iId, setiId] = useState ("");
  const [iName, setiName] = useState ("");
  const [iPrice, setiPrice] = useState ("");

  function insertItem() {
    let data = {
      "name" : iName,
      "id" : iId,
      "sprice" : parseFloat(iPrice)
    }
    console.log(data)

    fetch(`http://127.0.0.1:5000/items`, {
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
                  Insert into the 'ITEM' table
              </h2>
              <div>
                <div className="col-md-3">
                  <span>Enter Item ID: </span>
                  <input
                    className=""
                    type="text"
                    placeholder="Item ID"
                    required
                    onChange={e => setiId(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <span>Enter Item Name: </span>
                    <input
                      className=""
                      type="text"
                      placeholder="Item Name"
                      required
                      onChange={e => setiName(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                  <span>Enter Item Price: </span>
                    <input
                      className=""
                      type="text"
                      placeholder="Item Price"
                      required
                      onChange={e => setiPrice(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={insertItem} className="submit-btn">Insert</button>
              </div>
            </div>
        </div>
    </div>
  );
};
  
export default Insert;