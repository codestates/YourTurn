import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: "2",
  backgroundColor: "gray",
  padding: "10px",
};

function Home() {
  return (
    <>
      <div style={OTHER_CONTENT_STYLES}>소개글</div>
      <div style={OTHER_CONTENT_STYLES}>
        <Link to="/team">그룹 목록</Link>
      </div>
    </>
  );
}

export default Home;
