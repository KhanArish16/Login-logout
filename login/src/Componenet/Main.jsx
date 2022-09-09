import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Main() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("USER");
    navigate("/login");
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((value) => value.json())
      .then((json) => setData(json.products));
  }, []);

  return (
    <div className="parent">
      <h1 style={{ color: "GrayText", textAlign: "center" }}>
        Wlcome to Main Page
      </h1>
      <button onClick={logOut} className="logout-btn">
        Log Out
      </button>

      <div>
        {data.map((items) => {
          return (
            <div key={items.id} className="main-div">
              <div className="img-div">
                <img className="img" src={items.thumbnail}></img>
              </div>
              <div className="info-div">
                <h2>{items.title}</h2>
                <p>{items.category}</p>
                <p>{items.description}</p>
                <h4>Price : {items.price} $</h4>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
