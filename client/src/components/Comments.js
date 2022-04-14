import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = ({ fetchComments, postCommentHandler }) => {
  // console.log("fetchComments", fetchComments);
  // if (fetchComments == null) {
  //   return null;
  // }
  useEffect(() => {
    setComments(fetchComments);
  }, [fetchComments]); // []면 comments 바뀔 때마다 리렌더가 안 됨
  const [msg, setMsg] = useState("");
  const [comments, setComments] = useState([]);
  const isTextareaDisabled = msg.length === 0;

  const handleButtonClick = async (event) => {
    const commentData = {
      content: msg,
    };
    postCommentHandler(commentData);
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleDeleteComment = (deleteIndex) => {
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
      <ul className="ml-6 max-w-lg rounded-lg shadow-sm shadow-sky-600/50">
        {comments?.map(CommentsRenderer)}
      </ul>
      <div className="ml-6 max-w-lg rounded-lg shadow-sm shadow-sky-600/50">
        <form className="flex items-end w-full p4">
          <div className="mb-2">
            <div className="text-lg text-gray-600 p-2">댓글 달기</div>
            <textarea
              value={msg}
              onChange={handleChangeMsg}
              placeholder="Add a comment"
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 mr-20"
            ></textarea>
          </div>

          <div>
            <button
              className="mb-3 ml-2 cursor-pointer px-3 py-2 text-sm text-blue-100 bg-sky-500 rounded hover:bg-sky-400"
              disabled={isTextareaDisabled}
              onClick={handleButtonClick}
            >
              입력
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comments;
