import React, { useEffect, useState } from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function AdminRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("AdminRoutes", user);
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box m="20px">{children}</Box>
        </div>
      </main>
    </div>
  );
}
