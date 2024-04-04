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
      path: "posts",
      element: "Posts",
    },
    {
      path: "users",
      element: "Users",
    },
  ];

  const linkClass = (e) => {
    return e.isActive ? `active--super` : ``;
  };

  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className={linkClass}>
              {item.element}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}