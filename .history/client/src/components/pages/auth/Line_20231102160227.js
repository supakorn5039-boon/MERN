import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { loginLine } from "../../../functions/auth";

//function
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/UserSlice";

const Line = () => {
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
        })

        .catch((err) => console.log(err));

      // const IdToken = liff.getIDToken();
      // console.log(profile, IdToken);
    } catch (err) {
      console.log(err);
    }
  };

  return <div> Line</div>;
};

export default Line;
