import React from "react";
import "../App.css";

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: "2",
  backgroundColor: "pink",
  padding: "10px",
};

function Home() {
  return (
    <div>
      <div style={OTHER_CONTENT_STYLES}>소개글</div>
      <div style={OTHER_CONTENT_STYLES}>그룹 목록</div>
    </div>
  );
}

export default Home;
