import React from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FormProduct from "../components/FormProduct";
import FormEditProducts from "../components/FormEditProducts";

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
