import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HomeRoute from './routes/HomeRoute'
import PostsRoute from './routes/PostsRoute'
import PostRoute from './routes/PostRoute'
import PostCommentsRoute from './routes/PostCommentsRoute'
import UsersRoute from './routes/UsersRoute'
import UserRoute from './routes/UserRoute'
import ErrorRoute from './routes/ErrorRoute'

import Layout from './pages/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/posts",
        element: <PostsRoute />
      },
      {
        path: "/posts/:postId",
        element: <PostRoute />
      },
      {
        path: "/posts/:postId/comments",
        element: <PostCommentsRoute />
      },
      {
        path: "/comments",
        element: <PostCommentsRoute />
      },
      {
        path: "/users",
        element: <UsersRoute />,
        children: [
          {
            path: "/users/:userId",
            element: <UserRoute />
          },
        ]
      },
     
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}