import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <form onSubmit={Register}>
        <p>{msg}</p>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Confirm Password</label>
        <input
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
