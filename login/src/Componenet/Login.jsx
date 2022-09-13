import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "./Auth";

function Login({ user }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   let login = localStorage.getItem("token");
  //   if (login) {
  //     navigate("/main");
  //   } else if (!login) {
  //     navigate("/login");
  //   }
  // });

  function loggedIn(e) {
    e.preventDefault();
    const dataValue = {
      userName,
      password,
    };
    user.map((data) => {
      if (data.email === userName && data.password === password) {
        localStorage.setItem("USER", JSON.stringify(dataValue));

        navigate("/main");
      } else {
        console.log("error");
      }
    });
  }
  console.log("<from login>", user);

  return (
    <div className="form">
      <h1>Login</h1>

      <form onSubmit={(e) => loggedIn(e)}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="login-btn" type="submit">
          Login
        </button>
        <p>
          Don't Have an Account <NavLink to="/register">Register</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
