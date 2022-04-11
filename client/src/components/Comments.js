import React, { useState } from "react";
import Comment from "./Comment";
import shortid from "shortid";

// comments axios.get으로 불러오기
const dummyComments = [
  {
    id: 1,
    nickname: "유어턴",
    content: "이대로만 대답하면 면접 붙으실 것 같아요!",
    interest_id: 1,
    createdAt: "2022-04-08 00:00:00",
    updatedAt: "2022-04-08 01:00:00",
  },
];

const Comments = () => {
  const [msg, setMsg] = useState("");
  const [comments, setComments] = useState(dummyComments);

  const handleButtonClick = (event) => {
    const comment = {
      id: shortid(),
      nickname: nickname,
      title: "new Comment",
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
