import "./App.css";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [tok, setToken] = useState("");
  const [status, setStatus] = useState();
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin) navigate("/");
    else navigate("/register");
  }, [loggedin]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) setLoggedin(false);
    else {
      setLoggedin(true);
      setToken(user.token);
    }
  }, []);
  // else
  // navigate("/register")

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setLoggedin(false);
  };

  const passdata = (e, type) => {
    setData(e);
    if (type === "signup") setStatus(true);
    else if (type === "login") setStatus(false);
  };

  useEffect(() => {
    const pass = async () => {
      let response;
      if (status) {
        response = await fetch("https://mern-crud-delta.vercel.app/user/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await fetch("https://mern-crud-delta.vercel.app/user/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json.data));
        setLoggedin(true);
      } else {
        // console.log(json.error);
      }
    };
    pass();
  }, [data, status]);

  return (
    <div className="bg-slate-400 min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard loggedin={loggedin} logoutHandler={logoutHandler} />
          }
        />
        <Route path="/login" element={<Login passdata={passdata} />} />
        <Route path="/register" element={<Signup passdata={passdata} />} />
      </Routes>
    </div>
  );
}

export default App;
