import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

export default function ManageUser() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user.user.token);
  useEffect(() => {
    //Code
  }, []);

  return <div>ManageUser</div>;
}
