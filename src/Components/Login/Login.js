import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <form onSubmit={Login}>
        <p>{msg}</p>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
