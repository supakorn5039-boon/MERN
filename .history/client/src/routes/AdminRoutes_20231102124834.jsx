import React from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoutes({ children }) {
  const { Admin } = useSelector((state) => ({ ...state }));
  console.log(Admin);
  return (
    //check

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
