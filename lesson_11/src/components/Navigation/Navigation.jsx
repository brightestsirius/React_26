import React from "react";
import { NavLink } from "react-router-dom";
import "./style.sass";

export default function Navigation() {
  const nav = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "users",
      element: "Users",
    },
    {
      path: "posts",
      element: "Posts",
    },
  ];
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.element}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
