import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SigninModal from "./components/SigninModal";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Write from "./pages/Write";
import Team from "./pages/Team";
import MyPost from "./pages/MyPost";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  // const navigate = useNavigate();
  const isAuthenticated = async () => {
    await axios
      .get("https://localhost:4000/auth", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("res:::", res);
        setUserinfo(res.data.data.userInfo);
        setIsLogin(true);
        // navigate("/");
      });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isAuthenticated();
  }, []);

  // useEffect(() => {
  //   setIsOpen(!isLogin);
  // }, [isLogin]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar handleResponseSuccess={handleResponseSuccess} />
        <SigninModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          handleResponseSuccess={() => {}}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/write" element={isLogin ? <Write /> : <SigninModal />} />
          <Route path="/Team" element={isLogin ? <Team /> : <SigninModal />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
