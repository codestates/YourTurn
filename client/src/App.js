import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Write from "./pages/Write";
import Team from "./pages/Team";
import GlobalStyles from "./GlobalStyles";
import LoginModal from "./components/Modal/LoginModal";
import Signup from "./pages/Signup";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entry, setEntry] = useState("");
  const [writeDefault, setWriteDefault] = useState("");
  return (
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <Navbar isLogin={isLogin} setShowModal={setShowModal} setEntry={setEntry} />
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setShowModal={setShowModal} />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
