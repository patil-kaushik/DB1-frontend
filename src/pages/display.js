//Team Members:
// Kaushik Patil - 1001928970
// Vivek Yelethotadahalli Srinivas - 1002064152
import React from "react";
import "../pages/components.scss";
import { useState } from "react";
  
const Display = () => {

  const [iId, setiId] = useState (null);
  const [iName, setiName] = useState (null);
  const [items, setItems] = useState(null);

  var  [showName, setshowiName] = useState (true);
  var [showID, setshowid] = useState(true);
  var [showData, setshowData] = useState(false);
  
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
    setItems(response);
    console.log(items)
    setshowData(true);
  };
  
  function displayItem() {
    getItems()
  }

  function itemIDset(val) {
    setshowData(false);
    if (val) {
      setshowiName(false);
    }
    else {
      setshowiName(true);
    }
    setiId(val)
  }

  function itemNameset(val) {
    setshowData(false);
    if(val){
      setshowid(false);
    }
    else {
      setshowid(true);
    }
    setiName(val)
  }

  return (
    <div className="col-md-12">
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
            {items && showData && <div>
                    <table>
                        <thead>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Price</th>
                        </thead>
                        {items.data.map(({id, name, price}) =>
                        <tbody>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{price}</td>
                        </tbody>                      
                        )}
                    </table>
                </div>}
        </div>
    </div>
  );
};
  
export default Display;