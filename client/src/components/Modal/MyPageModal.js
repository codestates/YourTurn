import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalContiaer = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: flex-end;
  left: 0;
  top: 0;
  background: transparent;
  width: 100%;
  height: 30%;
  margin-top: 70px;
  border: 10px solid red;
`
const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15%;
  background-color: white;
  height: 30%;
  justify-content: space-around ;
  font-size: 18px;
  font-weight: bold;
`
const MyPost = styled(Link)`

`
const Setting = styled(Link)`

`
const LogOut = styled.div`

`


const MyPageModal = ({showMyModal, setShowMyModal}) => {
  return(
    <ModalContiaer>
      <ModalView>
      <MyPost to="/myarticle">내 작성글</MyPost>
      <Setting to="/profile" >설정</Setting>
      <LogOut onClick={()=>{sessionStorage.removeItem("isLogin")}}>로그아웃</LogOut>  
      </ModalView>
  </ModalContiaer>
  )  
}

export default MyPageModal
