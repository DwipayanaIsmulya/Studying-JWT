import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const refreshToken = () => {
    try {
      const tokenStorage = localStorage.getItem("token");
      const decoded = parseJwt(tokenStorage);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Welcome Back {name}</h1>
    </div>
  );
};

export default Home;
