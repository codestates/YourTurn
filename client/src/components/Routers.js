import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Profile from "../pages/Profile";
import Write from "../pages/Write";
// import MyPost from "../pages/MyPost";
// import Group from "../pages/Group";
// import Signup from "../pages/Signup";
import "../App.css";
import Navbar from "./Navbar";
import GlobalStyles from "../GlobalStyles";

function Routers() {
  return (
      <BrowserRouter>
      <GlobalStyles />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} /> */}
          <Route path="/write" element={<Write />} />
          {/* <Route path="/mypost" element={<MyPost />} />
          <Route path="/group" element={<Group/>} />
          <Route path="/signup" element={<Signup/>} /> */}
        </Routes>
      </BrowserRouter>
  )
}
export default Routers;