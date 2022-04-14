import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import YTLogo from "../assets/YTLogo.png"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 500;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.1);
  height: 70px;
`

const LogoWrap = styled(Link)`
  margin-left : 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  height:70px;
  width:10%
`;

const Logo = styled.img`
  width:100% ;
  height:100% ;
  padding : 5px;
`

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;

const Menu = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

const Navbar = ({ setNavDiv, setShowModal, setShowMyModal, showMyModal }) => {
  let isLogin = sessionStorage.getItem("isLogin");

  const navigate = useNavigate();

  const NavContainer = useRef();

  console.log("네비게이션", NavContainer);

  const changePageToWrite = () => {
    if (isLogin === "true") {
      // setEntry("navClick");
      sessionStorage.setItem("entry", "navClick");
      navigate("/write");
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    setNavDiv(NavContainer);
  });

  return (
    <Nav ref={NavContainer}>
      <LogoWrap to="/">
        <Logo src={YTLogo}></Logo>
      </LogoWrap>
      <MenuWrap>
        <Menu onClick={changePageToWrite}>새 글 쓰기</Menu>
        {isLogin === "true" ? (
          <Menu
            onClick={() => {
              setShowMyModal(!showMyModal);
            }}
          >
            마이페이지
          </Menu>
        ) : (
          <Menu
            onClick={() => {
              setShowModal(true);
            }}
          >
            로그인
          </Menu>
        )}
      </MenuWrap>
    </Nav>
  );
};

export default Navbar;
