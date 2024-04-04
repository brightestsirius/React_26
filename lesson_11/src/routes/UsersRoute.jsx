import React from 'react'
import Users from './../components/Users/Users'

import {Outlet} from 'react-router-dom'

export default function UsersRoute() {
  return (
    <>
      <h4>Users Route</h4>
      <Users />

      <Outlet />
    </>
  )
}