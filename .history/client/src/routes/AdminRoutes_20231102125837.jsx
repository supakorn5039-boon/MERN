import React, { useEffect, useState } from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { currentAdmin } from "../functions/auth";

export default function AdminRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));

  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.user.token) {
      currentAdmin(user.user.token)
        .then((r) => {
          setOk(true)
        })
        .catch((err) => {
          console.log(err))
        }
    }
  }, [user]);

  console.log("AdminRoutes", user.user.role);
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
