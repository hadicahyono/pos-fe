import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import axios from "axios";
import { API_URL } from "./helper";
import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  let getLocalStorage = localStorage.getItem("pos_login");
  const keepLogin = async () => {
    try {
      if (getLocalStorage) {
        let { data } = await axios.get(API_URL + `/users/keep`, {
          headers: { Authorization: `Bearer ${getLocalStorage}` },
        });
        localStorage.setItem(`pos_login`, data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </>
  );
};

export default App;
