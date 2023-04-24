//Team Members:
// Kaushik Patil - 1001928970
// Vivek Yelethotadahalli Srinivas - 1002064152
import React from "react";
import "../pages/components.scss";
import { useState } from "react";
  
const Show = () => {

    const [items, setItems] = useState(null);

    const getItems = async () => {
        const response = await fetch(
          `http://127.0.0.1:5000/showitems`,{
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
          }
        ).then((response) => response.json());
        setItems(response);
        console.log(items)
      };

    function showItems(){
        getItems()
    }

  return (
    <div className="col-md-12">
        <div className="app-container ml-3">
            <div className="row">
              <h2>
                  Printing all the values from 'ITEM' table
              </h2>
                <div className="col-md-3">
                  Click the below button to display all the tuples from the table  
                </div>
                <button type="submit" onClick={showItems} className="submit-btn">Show</button>
                {items && <div>
                    <table>
                        <thead>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Price</th>
                        </thead>
                        {items?.data?.map(({id, name, price}) =>
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
    </div>
  );
};
  
export default Show;