import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Write from "./pages/Write";
import Team from "./pages/Team";
import GlobalStyles from "./GlobalStyles";
import LoginModal from "./components/Modal/LoginModal";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import MyPageModal from "./components/Modal/MyPageModal";
import Article from "./pages/Article";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);
  const [entry, setEntry] = useState("");
  const [writeDefault, setWriteDefault] = useState("");
  const [navDiv, setNavDiv] = useState();

  
  console.log("showmodal현재상태", showModal);

  return (
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <Navbar setNavDiv={setNavDiv} showMyModal={showMyModal} setShowModal={setShowModal} setEntry={setEntry} setShowMyModal={setShowMyModal} />
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
      <MyPageModal  navDiv={navDiv}  showMyModal={showMyModal} setShowMyModal={setShowMyModal} />
      <Routes>
        <Route path="/" element={<Home setShowModal={setShowModal} />} />
        <Route
          path="/write"
          element={
            <Write entry={entry} writeDefault={writeDefault} setWriteDefault={setWriteDefault} />
          }
        />
        <Route
          path="/team/:id"
          element={<Team setEntry={setEntry} setWriteDefault={setWriteDefault} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article/:id" element={<Article setWriteDefault={setWriteDefault} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
