import React from "react";

const Comment = ({ comment, handleDeleteComment, idx }) => {
  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      hour = d.getHours(),
      minute = d.getMinutes();
    return `${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${
      hour < 10 ? `0${hour}` : hour
    }:${minute < 10 ? `0${minute}` : minute}`;
  };
  return (
    <div className="font-sun">
      <li className="comment" id={comment.id}>
        <div className="comment__content">
          <div className="comment__userInfo">
            <div className="flex justify-start">
              <span className="pl-3 py-3">{comment.user_nickname} |</span>
              <span className="px-3 py-3">{formatDate(comment.createdAt)}</span>
              <button
                className="cursor-pointer px-3 py-2 text-sm text-blue-100 bg-gray-400 hover:bg-gray-400 rounded-md"
                onClick={() => handleDeleteComment(comment.user_nickname, idx)}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="comment__userInfo--buttonWrapper"></div>
          </div>
          <div className="p-3">{comment.content}</div>
        </div>
      </li>
    </div>
  );
};

export default Comment;
