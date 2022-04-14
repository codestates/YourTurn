import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalContiaer = styled.div`
  position: fixed;
  display: ${(props) => (props.showMyModal ? "block" : "none")};
  z-index: 1;
  justify-content: flex-end;
  right: 0;
  top: 0;
  background: transparent;
  width: 15%;
  height: 20%;
  margin-top: 70px;
`;
const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  justify-content: space-around;
  font-size: 18px;
  font-weight: bold;
`;
const MyPost = styled.div``;
const Setting = styled.div``;
const LogOut = styled.button``;

const MyPageModal = ({ navDiv, showMyModal, setShowMyModal }) => {
  const navigate = useNavigate();

  const moveToMyPage = () => {
    setShowMyModal(false);
    navigate("/myarticle");
  };

  const moveToMyProfile = () => {
    setShowMyModal(false);
    navigate("/profile");
  };

  const modalContainer = useRef();

  const handleCloseModal = ({ target }) => {
    if (
      showMyModal &&
      !modalContainer?.current?.contains(target) &&
      !navDiv?.current?.contains(target)
    ) {
      setShowMyModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  });

  return (
    <ModalContiaer ref={modalContainer} showMyModal={showMyModal}>
      <ModalView>
        <MyPost onClick={moveToMyPage}>내 작성글</MyPost>
        <Setting onClick={moveToMyProfile}>설정</Setting>
        <LogOut
          onClick={() => {
            sessionStorage.removeItem("isLogin");
            navigate("/");
            setShowMyModal(false);
          }}
        >
          로그아웃
        </LogOut>
      </ModalView>
    </ModalContiaer>
  );
};

export default MyPageModal;
