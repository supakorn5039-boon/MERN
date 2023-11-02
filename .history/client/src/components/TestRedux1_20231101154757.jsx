import React from "react";
import { useSelector } from "react-redux";

export default function TestRedux1() {
  const { user } = useSelector((state) => ({ ...state }));
  return <div>TestRedux1</div>;
}
