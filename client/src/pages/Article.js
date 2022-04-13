import React, { useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";

import axios from "axios";

// Article Page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 1px solid green;
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
const ContentTitle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
const ContentContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
const CommentWrap = styled.div``;

function Article() {
  const { id } = useParams();
  // const [fetchArticle, setFetchArticle] = useState({
  //   title: "가장 잘 아는 개발 방법론은 무엇입니까",
  //   content:
  //     "애자일 개발 방법론입니다. 애자일 방법론은 절차보다는 사람을, 문서보다는 작동하는 소프트웨어를, 미리 철저하게 계획하기 보다는 변화에 대한 민첩한 대응을, 계약과 협상에 얽매이기 보다는 고객과의 협력을 중요하게 생각합니다.",
  //   total_likes: 10,
  //   user_id: 1,
  //   comments: [
  //     {
  //       id: 1,
  //       post_id: 1,
  //       user_id: 1,
  //       content: "리액트로 useState를 활용해 봅시다",
  //       createdAt: "2022-03-08T00:00:00.000Z",
  //       updatedAt: "2022-03-08T10:00:00.000Z",
  //     },
  //   ],
  // });
  const [fetchArticle, setFetchArticle] = useState({});

  // 댓글 보낼 라우터 필요
  // const postComment = async (comment) => {
  //   let data = await axios.post(`https://localhost:4000/comment/${id}`)
  //   if (data) {
  //     return data.data
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      return await axios.get(`https://localhost:4000/article/${id}`);
      // console.log("data:::", data);
    }
    fetchData().then((data) => {
      // console.log("data:::", data);

      setFetchArticle(data.data.postInfo);
    });

    // setWriteDefault(name);
    // sessionStorage.setItem("name", name);
  }, []);

  return (
    <Container>
      <TeamName>팀네임</TeamName>
      <Content>
        <ContentTitle>{fetchArticle.title}</ContentTitle>
        <ContentContent>{fetchArticle.content}</ContentContent>
      </Content>
      <CommentWrap>
        <Comments fetchComments={fetchArticle.comments} />
      </CommentWrap>
    </Container>
  );
}

export default Article;
