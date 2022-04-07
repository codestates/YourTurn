import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyPost from "./pages/MyPost";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/mypost" component={MyPost} />
      </Routes>
    </div>
  );
}

export default App;
