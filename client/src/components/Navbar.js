import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 500;
  width: 100%;
  background-color: yellow;
`;
const LogoWrap = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const Logo = styled.div`
  margin: 15px;
`;

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

const Navbar = ({ isLogin, setShowModal }) => {
  const navigate = useNavigate();

  const changePageToWrite = () => {
    if (isLogin) {
      navigate("/write");
    } else {
      setShowModal(true);
    }
  };

  const changePageToMyPost = () => {
    navigate("/mypost");
  };

  return (
    <Nav>
      <LogoWrap to="/">
        <Logo>YourTurn</Logo>
      </LogoWrap>
      <MenuWrap>
        <Menu onClick={changePageToWrite}>새 글 쓰기</Menu>
        {isLogin ? (
          <Menu onClick={changePageToMyPost}>마이페이지</Menu>
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
