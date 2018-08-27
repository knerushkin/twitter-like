import React from "react";
import style from "./post.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Button = withRouter(({ history, id }) => (
  <button
    onClick={() => {
      history.push("/post/" + id);
    }}
    type="button"
  >
    Go to details...
  </button>
));

const Post = ({ post, num, onClick }) => {
  return (
    <div onClick={onClick} className={style.post}>
      <div>UserId: {post.userId}</div>
      <div>Title: {post.title}</div>
      <Button id={post.id}/>
    </div>
  );
};

export default Post;
