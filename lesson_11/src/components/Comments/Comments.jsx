import React, { useState, useEffect } from "react";

import useParam from "./../../hooks/useParam";

import service from "./../../services/jsonplaceholder";

export default function Comments() {
  const paramPostId = useParam(`postId`);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get(`posts`, `${paramPostId}/comments`);
      setComments(response);
    })();
  }, []);

  return comments.length ? (
    <ol>
      {comments.map((item) => (
        <li key={item.id}>
          <ul>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>Body: {item.body}</li>
          </ul>
        </li>
      ))}
    </ol>
  ) : null;
}
