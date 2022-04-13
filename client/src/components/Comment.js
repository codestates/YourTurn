import React from "react";

const Comment = ({ comment, handleDeleteComment, idx }) => {
  return (
    <li className="comment" id={comment.id}>
      <div className="comment__content">
        <div className="comment__userInfo">
          <div className="comment__userInfo--wrapper">
            <span className="comment__nickname">{comment.user_nickname}</span>
            <span className="comment__createdAt">{comment.createdAt}</span>
          </div>
          <div className="comment__userInfo--buttonWrapper">
            <button
              className="comment__deleteButton"
              onClick={() => handleDeleteComment(comment.user_nickname, idx)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div className="comment__message">{comment.content}</div>
      </div>
    </li>
  );
};

export default Comment;
