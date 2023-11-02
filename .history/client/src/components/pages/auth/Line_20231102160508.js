import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { loginLine } from "../../../functions/auth";

//function
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/UserSlice";

const Line = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    liff.init({ liffId: "2001445503-dvjzJwxQ" }).then(() => {
      handleLogin();
    });
  }, []);

  const handleLogin = async () => {
    try {
      const profile = await liff.getProfile();
      await loginLine(profile)
        .then((res) => {
          console.log(res);
          roleRedirects;
        })
        .catch((err) => console.log(err));

      // const IdToken = liff.getIDToken();
      // console.log(profile, IdToken);
    } catch (err) {
      console.log(err);
    }
  };

  const roleRedirects = (role) => {
    if (role === "admin") {
      navi("/admin/index");
    } else {
      navi("user/index");
    }
  };

  return <div> Line</div>;
};

export default Line;
