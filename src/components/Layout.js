import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header";

import FooterMdb from "./FooterMdb";

export default function Layout() {
  return (
    <div class="container">
      <Header />
      <Outlet />
      <FooterMdb />

    </div>



  )
}
