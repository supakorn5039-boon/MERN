import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/UserSlice";

export default function TestRedux2() {
  const dispatch = useDispatch();
  return (
    <div>
      TestRedux2
      <br />
      <button onClick={() => dispatch(login())}>Hello Redux</button>
    </div>
  );
}
