import React from "react";

import useTodosList from "./../../hooks/useTodosList";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

export default function TodosList() {
  const { todos, isLoading, itemDelete } = useTodosList();

  const handleItemDelete = (id) => {
    itemDelete(id)
  };

  return todos.length ? (
    <List>
      {todos.map((item) => (
        <ListItem key={item.id}>
          {item.title}{" "}
          <Button sx={{ml: 2}} variant="contained" onClick={() => handleItemDelete(item.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : null;
}
