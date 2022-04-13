import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
// import "/.Comments.css";

const Comments = ({ fetchComments }) => {
  // console.log("fetchComments", fetchComments);
  // if (fetchComments == null) {
  //   return null;
  // }
  useEffect(() => {
    setBackendComments(fetchComments);
  }, [fetchComments]); // []면 comments 바뀔 때마다 리렌더가 안 됨

  const [backendComments, setBackendComments] = useState([]);
  const addComment = async (text) => {
    const comment = {
      content: text,
    };
    // postComment(comment)
    // -- or --
    // axios.post...
    // let comment = await postCommentHandler(commentData);
    const newComments = [comment, ...backendComments];
    setBackendComments(newComments);
  };

  const handleDeleteComment = (deleteIndex) => {
    const restComments = backendComments.filter((comment, idx) => idx !== deleteIndex);
    setBackendComments(restComments);
  };

  return (
    <div className="comments">
      <h3 className="comments-title">댓글 달기</h3>
      <CommentForm submitLabel="입력" handleSubmit={addComment} />

      <div className="comments-container">
        {backendComments?.map((backendComment) => (
          <Comment
            key={backendComment.id}
            comment={backendComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
