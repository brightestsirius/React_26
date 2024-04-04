import React from "react";
import PostComments from "./../components/PostComments/PostComments";
import Button from "./../components/Button/Button";

import { useNavigate } from "react-router-dom";

import useQueryParams from "./../hooks/useQueryParams";

export default function PostCommentsRoute() {
  const navigation = useNavigate();

  const postId = useQueryParams(`postId`);

  const handleClick = () => navigation(`/posts/${postId}`);

  return (
    <>
      <h4>Post Comments Route</h4>
      <PostComments />
      <Button title={`Back to Post`} handleClick={handleClick} />
    </>
  );
}