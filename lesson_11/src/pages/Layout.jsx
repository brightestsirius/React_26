import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

import Container from '@mui/material/Container';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
