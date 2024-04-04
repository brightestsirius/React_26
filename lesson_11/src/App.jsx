import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from "./routes/UserRoute";
import PostsRoute from "./routes/PostsRoute";
import PostRoute from "./routes/PostRoute";
import PostCommentsRoute from "./routes/PostCommentsRoute";
import ErrorRoute from "./routes/ErrorRoute";

import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "/users",
        element: <UsersRoute />,
        children: [
          {
            path: "/users/:userId",
            element: <UserRoute />,
          },
        ],
      },
      {
        path: "/posts",
        element: <PostsRoute />,
      },
      {
        path: "/posts/:postId",
        element: <PostRoute />,
      },
      {
        path: "/posts/:postId/comments",
        element: <PostCommentsRoute />,
      },
      {
        path: "comments",
        element: <PostCommentsRoute />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
