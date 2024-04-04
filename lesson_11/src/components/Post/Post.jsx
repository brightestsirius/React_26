import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import service from "./../../services/jsonplaceholder";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const response = await service.get(`posts`, postId);
      setPost(response);
    })();
  }, []);

  return Object.keys(post).length ? (
    <ul>
      <li>Title: {post.title}</li>
      <li>User id: {post.userId}</li>
      <li><Link to={`/comments?postId=${post.id}`}>Read comments</Link></li>
    </ul>
  ) : null;
}