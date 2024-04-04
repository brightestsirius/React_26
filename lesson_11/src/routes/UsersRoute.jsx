import React from "react";
import { Outlet } from "react-router-dom";

import Users from "./../components/Users/Users";

export default function UsersRoute() {
  return (
    <div>
      <h4>Users Route</h4>
      <Users />
      <Outlet />
    </div>
  );
}
