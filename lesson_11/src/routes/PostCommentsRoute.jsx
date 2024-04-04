import React from "react";

import Comments from "./../components/Comments/Comments";
import Button from "./../components/Button/Button";

import { useNavigate } from "react-router-dom";

import useParam from "./../hooks/useParam";

export default function PostCommentsRoute() {
  const navigation = useNavigate();

  const paramPostId = useParam(`postId`);

  return (
    <div>
      <h4>Post Comments Route</h4>
      <Comments />
      <Button
        title={`Back to Post`}
        handleClick={() => navigation(`/posts/${paramPostId}`)}
      />
    </div>
  );
}
