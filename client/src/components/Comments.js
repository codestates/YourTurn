import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = ({ fetchArticle }) => {
  const [msg, setMsg] = useState("");

  const [comments, setComments] = useState(fetchArticle.comments);

  console.log("data arrived", fetchArticle.comments);

  const handleButtonClick = () => {
    const comment = {
      id: comments[0].user_id,
      nickname: comments[0].user_id,
      content: comments[0].content,
      createdAt: comments[0].createdAt,
      updatedAt: comments[0].updatedAt,
    };

    const newComments = [comment, ...comments];
    setComments(newComments);
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleDeleteComment = (deleteIndex) => {
    const restComments = comments.filter((idx) => idx !== deleteIndex);
    setComments(restComments);
  };

  const CommentsRenderer = (comment, idx) => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
        handleDeleteComment={handleDeleteComment}
        idx={idx}
      />
    );
  };

  return (
    <>
      <div className="commentForm__container">
        <div className="commentForm__inputContainer">
          <div className="commentForm__input">
            <textarea
              value={msg}
              onChange={handleChangeMsg}
              placeholder="댓글을 입력해주세요."
              className="commentForm__input--message"
            ></textarea>
          </div>
          <div className="commentForm__submitIcon">
            <button className="commentForm__submitButton" onClick={handleButtonClick}>
              댓글 입력
            </button>
          </div>
        </div>
      </div>

      <ul className="comments">{comments && comments.map(CommentsRenderer)}</ul>
    </>
  );
};

export default Comments;
