import React from "react";
import { useSelector } from "react-redux";
export default function UserRoutes({ children }) {
  const { user } = useSelector((state) => ({ ...state }));

  //check

  return children;
}
