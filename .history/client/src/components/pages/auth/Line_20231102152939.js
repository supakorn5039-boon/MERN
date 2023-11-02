import React, { useState, useEffect } from "react";
import liff from "@line/liff";

const Line = () => {
  useEffect(() => {
    liff.init({ liffId: "2001445503-dvjzJwxQ" }).then(() => {
      handleLogin();
    });
  }, []);

  const handleLogin = async () => {
    try {
      const profile = await liff.getProfile();

      console.log(profile);
    } catch (err) {
      console.log(err);
    }
  };

  return <div> Line</div>;
};

export default Line;
