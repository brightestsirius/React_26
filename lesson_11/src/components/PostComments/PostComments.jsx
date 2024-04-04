import React, { useState, useEffect } from "react";

import service from "./../../services/jsonplaceholder";

import useQueryParams from "../../hooks/useQueryParams";

export default function PostComments() {
  const [comments, setComments] = useState([]);

  const postId = useQueryParams(`postId`);

  useEffect(() => {
    (async () => {
      const response = await service.get(`posts`, `${postId}/comments`);
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
