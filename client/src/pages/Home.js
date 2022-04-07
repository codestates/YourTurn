import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: "2",
  backgroundColor: "pink",
  padding: "10px",
};

function Home() {
  return (
    <div>
      <Navbar />
      <div style={OTHER_CONTENT_STYLES}>소개글</div>
      <div style={OTHER_CONTENT_STYLES}>그룹 목록</div>
    </div>
  );
}

export default Home;
