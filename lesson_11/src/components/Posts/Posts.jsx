import React, { useState, useEffect } from "react";
import service from "../../services/jsonplaceholder";
import './style.sass'

import {Link} from 'react-router-dom'

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get(`posts`);
      setPosts(response.slice(0, 10));
    })();
  }, []);

  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <li key={item.id}><Link to={`${item.id}`}>{item.title}</Link> <Link className="link" to={`${item.id}/comments`}>Read comments</Link></li>
      ))}
    </ul>
  ) : null;
}
