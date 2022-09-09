import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenet/Home";
import Login from "./Componenet/Login";
import Main from "./Componenet/Main";
import Registration from "./Componenet/Registration";
import "./Componenet/App.css";

function App() {
  const [user, setUser] = useState([
    {
      email: "saalim@123",
      password: "0077",
    },
    {
      email: "arish@123",
      password: "1122",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="register"
            element={<Registration user={user} setUser={setUser} />}
          />
          <Route path="login" element={<Login user={user} />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
