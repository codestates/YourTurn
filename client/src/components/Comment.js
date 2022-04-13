import React from "react";
// import "/.Comments.css";

const Comment = ({ comment, handleDeleteComment }) => {
  console.log("comment", comment);
  return (
    <div key={comment.id} className="comment">
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.user_nickname}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-content">{comment.content}</div>
      </div>
      <div className="comment-actions">
        <button className="comment-action" onClick={() => handleDeleteComment(idx)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Comment;
