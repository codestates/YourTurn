import React, { useEffect, useParams } from "react";
import "../App.css";
import styled from "styled-components";
import Comments from "../components/Comments";
import axios from "axios";

// Article Page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 10px solid green;
  height: 500px;
  max-width: 1400px;
  align-items: center;
  margin: 100px auto 0 auto;
`;

const TeamName = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;
const CommentWrap = styled.div``;

function Article() {

  const { id } = useParams();
  const [ fetchArticle , setFetchArticle ] = useStates();
  
  useEffect( async () => {
  
    let {data} = await axios.get(`http://localhost:4000/article/${id}`)
    setFetchArticle(data.);

  // setWriteDefault(name);
  // sessionStorage.setItem("name", name);

}, []);


  return (
    <Container>
      <TeamName>팀네임</TeamName>
      <Content />
      <CommentWrap>
        <Comments />
      </CommentWrap>
    </Container>
  );
}

export default Article;
