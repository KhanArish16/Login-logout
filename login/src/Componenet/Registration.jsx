import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration({ user, setUser }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const getValue = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const navigate = useNavigate();
  const submit = () => {
    const reg = {
      email,
      password,
    };
    setUser((prevState) => [...prevState, reg]);
    navigate("/login");
  };
  console.log("<<registered>>", user);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Registration</h3>
      <div>
        <input
          type="email"
          placeholder="Enter your E-email"
          id="email"
          value={email}
          onChange={(e) => getValue(e)}
        />
        <br />

        <br />
        <input
          type="password"
          placeholder="Enter New Password"
          id="password"
          value={password}
          onChange={(e) => getValue(e)}
        />
        <br />
        <button onClick={() => submit()}>Register</button>
      </div>
    </div>
  );
}

export default Registration;
