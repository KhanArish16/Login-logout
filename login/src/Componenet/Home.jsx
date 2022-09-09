import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="header-div">
      <header>
        <p className="header">
          <NavLink to="/login" className="nav">
            Login
          </NavLink>
        </p>
        <p className="header">
          <NavLink className="nav" to="/register">
            Register
          </NavLink>
        </p>
      </header>
      <h1 style={{ marginTop: "-4.5rem" }}>HOME PAGE</h1>
    </div>
  );
}

export default Home;
