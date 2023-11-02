import React, { useState, useEffect } from "react";
import liff from "@line/liff";

const Line = () => {
  useEffect(() => {
    liff.init({ liffId: "2001445503-dvjzJwxQ" }).then(() => {});
  }, []);

  return <div> Line</div>;
};

export default Line;
