import React from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "./../../store/posts/slice";

export default function Posts() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  const handleItemDelete = (id) => deletePost(id);

  return data ? (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : null;
}
