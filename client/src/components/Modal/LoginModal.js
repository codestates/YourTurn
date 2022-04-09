import React from "react";
import styled from "styled-components";
import Signin from "./SignIn";

const ModalContiaer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.showModal ? "block" : "none")};
`

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  backdrop-filter: blur(4px);
`
const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  background-color: white;
  border-radius: 10px;
  height: 432px;

`

const CloseButton = styled.div`
 font-size: 15px;
 justify-content: flex-end;
 display: flex;
 width: 100%;
 cursor: pointer;
`
const Icon = styled.i`
  margin: 10px;
  padding: 10px;
`

const LoginModal = ({showModal, setShowModal}) => {
  return(
    <ModalContiaer showModal={showModal}>
    <ModalBackdrop>
      <ModalView>
        <CloseButton onClick={()=>{setShowModal(false)}}>
          <Icon className="fa-solid fa-xmark"></Icon>
        </CloseButton>
        <Signin setShowModal={setShowModal}/>
      </ModalView>
    </ModalBackdrop>
  </ModalContiaer>
  )
  
}

export default LoginModal
