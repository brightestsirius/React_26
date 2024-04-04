import React, { useState, useEffect } from "react";
import service from "./../../services/jsonplaceholder";

import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get(`posts`);
      setPosts(response.slice(0, 10));
    })();
  }, []);

  return posts.length ? (
    <Paper elevation={3}>
      <List>
        {posts.map((item) => (
          <ListItem key={item.id} sx={{ justifyContent: 'space-between' }}>
            <Link to={`${item.id}`}>{item.title}</Link>{" "}
            <Button
              variant="contained"
              component={Link}
              to={`/comments?postId=${item.id}`}
            >
              Read comments
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  ) : null;
}
