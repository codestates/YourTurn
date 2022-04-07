import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function Mypage({ userinfo, handleLogout }) {
  if (!userinfo) {
    return <div></div>;
  }
  return (
    <div>
      <center>
        <h1>Mypage</h1>
        <div className="username">{userinfo.username}</div>
        <div className="email">{userinfo.email}</div>
        <div className="mobile">{userinfo.mobile}</div>
        <button className="btn btn-logout" onClick={handleLogout}>
          logout
        </button>
      </center>
    </div>
  );
}

export default Mypage;
