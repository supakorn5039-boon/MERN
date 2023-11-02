import React from "react";
import { useSelector } from "react-redux";
import { ReactReduxContextValue } from "../../node_modules/react-redux/src/components/Context";

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
