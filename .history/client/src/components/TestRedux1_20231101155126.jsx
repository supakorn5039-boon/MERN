import React from "react";
import { useSelector } from "react-redux";

export default function TestRedux1() {
  const { user } = useSelector((state) => ({ ...state }));

  console.log("user", user);
  return (
    <div>
      TestRedux1
      <br />
      {user.value}
    </div>
  );
}
