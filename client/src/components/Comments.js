import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import shortid from "shortid";

const Comments = ({ fetchComments }) => {
  // console.log("fetchComments", fetchComments);
  // if (fetchComments == null) {
  //   return null;
  // }
  useEffect(() => {
    setComments(fetchComments);
  }, [fetchComments]); // []면 comments 바뀔 때마다 리렌더가 안 됨
  const [msg, setMsg] = useState("");
  const [comments, setComments] = useState([]);

  const handleButtonClick = (event) => {
    const comment = {
      content: msg,
    };

    const newComments = [comment, ...comments];
    setComments(newComments);
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleDeleteComment = (nickname, deleteIndex) => {
    const restComments = comments.filter((comment, idx) => idx !== deleteIndex);
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
      <div className="CommentForm__container">
        <div className="CommentForm__wrapper">
          <div className="CommentForm__inputContainer">
            <div className="CommentForm__inputWrapper">
              <div className="CommentForm__input">
                <textarea
                  value={msg}
                  onChange={handleChangeMsg}
                  placeholder="댓글을 입력해주세요."
                  className="CommentForm__input--message"
                ></textarea>
              </div>
            </div>
            <div className="CommentForm__submit">
              <div className="CommentForm__submitIcon">
                <button className="CommentForm__submitButton" onClick={handleButtonClick}>
                  댓글 입력
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="Comments">{comments.map(CommentsRenderer)}</ul>
    </>
  );
};

export default Comments;
