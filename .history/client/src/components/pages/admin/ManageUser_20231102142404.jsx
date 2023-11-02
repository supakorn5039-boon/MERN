import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { list } from "../../../functions/user";

export default function ManageUser() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user);

  useEffect(() => {
    //Code
    loadData(user.user.token);
  }, []);

  const loadData = async (authtoken) => {
    return await list(authtoken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return <div>ManageUser</div>;
}