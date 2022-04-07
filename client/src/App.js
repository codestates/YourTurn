import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useHistory,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";
import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const isAuthenticated = async () => {
    await axios
      .get("https://localhost:4000/auth", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log("res:::", res);
        setUserinfo(res.data.data.userInfo);
        setIsLogin(true);
        console.log("PLOP");
        history.push("/");
      });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post("https://localhost:4000/signout").then((res, req) => {
      console.log("bye");
      setUserinfo(null);
      setIsLogin(false);
      history.push("/");
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <Login
              setIsLogin={setIsLogin}
              handleResponseSuccess={handleResponseSuccess}
            />
          </Route>
          <Route exact path="/signup">
            <Signup setIsLogin={setIsLogin} />
          </Route>
          <Route exact path="/mypage">
            <Mypage userinfo={userinfo} handleLogout={handleLogout} />
          </Route>
          <Route path="/">
            {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
