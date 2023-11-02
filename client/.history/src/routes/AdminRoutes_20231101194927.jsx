import React from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { Routes } from "react-router-dom";

export default function AdminRoutes({ children }) {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box m="20px">
            <Routes>{children}</Routes>
          </Box>
        </div>
      </main>
    </div>
  );
}
