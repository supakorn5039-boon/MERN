import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/UserSlice";

export default function TestRedux2() {
  return (
    <div>
      TestRedux2
      <br />
      <button>Hello Redux</button>
    </div>
  );
}
