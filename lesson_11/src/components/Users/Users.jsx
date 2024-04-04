import React, { useState, useEffect } from "react";
import service from "../../services/jsonplaceholder";

import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get(`users`);
      setUsers(response.slice(0, 10));
    })();
  }, []);

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
