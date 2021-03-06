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
  height: 500px;
  max-width: 800px;
  align-items: left;
  margin: 100px auto 0 auto;
  /* border: 1px solid black; */
`;

const TeamName = styled.div`
  font-size: 30px;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
const ContentTitle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
`;
const ContentContent = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  padding: 10px;
`;
const ArticleWrap = styled.div``;
const Author = styled.div``;
const CommentWrap = styled.div``;

function Article({ setWriteDefault }) {
  const { id } = useParams();

  // const [article, setarticle] = useState({
  //   title: "가장 잘 아는 개발 방법론은 무엇입니까",
  //   content:
  //     "애자일 개발 방법론입니다. 애자일 방법론은 절차보다는 사람을, 문서보다는 작동하는 소프트웨어를, 미리 철저하게 계획하기 보다는 변화에 대한 민첩한 대응을, 계약과 협상에 얽매이기 보다는 고객과의 협력을 중요하게 생각합니다.",
  //   total_likes: 10,
  //   user_id: 1,
  //   comments: [{}, {}]
  // });
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  const postComment = async (commentData) => {
    let { data } = await axios.post(`${process.env.REACT_APP_API_URL}/article/${id}`, commentData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log("sent comment:::", data);
    // {
    //   commentInfo: {
    //     content: "last";
    //     createdAt: "2022-04-13T05:17:37.831Z";
    //     id: 18;
    //     post_id: "1";
    //     updatedAt: "2022-04-13T05:17:37.831Z";
    //     user_id: 1;
    //     user_nickname: "Kimcoding";
    //   }
    // }

    let newComments = [data.commentInfo, ...comments];
    setComments(newComments);
  };

  useEffect(() => {
    async function fetchArticle() {
      return await axios.get(`${process.env.REACT_APP_API_URL}/article/${id}`);
      // console.log("data:::", data);
    }
    fetchArticle().then((data) => {
      // console.log("data:::", data);
      const newArticle = data.data.postInfo;
      setArticle(newArticle);
      setComments(newArticle.comments.reverse()); // 서버에서 받아온 커멘트 정렬에 최신이 아래로 가 있어서 reverse 함
    });
  }, []);

  return (
    <Container className="flex">
      <ArticleWrap className="mx-7">
        <TeamName>{sessionStorage.getItem("name")}</TeamName>
        <Content className="rounded-lg shadow-sm shadow-sky-600/50">
          <ContentTitle className="text-base">제목 | {article.title}</ContentTitle>
          <ContentContent>{article.content}</ContentContent>
        </Content>
      </ArticleWrap>
      <CommentWrap>
        <Comments className="flex" fetchComments={comments} postCommentHandler={postComment} />
      </CommentWrap>
    </Container>
  );
}

export default Article;
