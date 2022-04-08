import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyPost from "./pages/MyPost";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/mypost" component={MyPost} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </div>
  );
}

export default App;
