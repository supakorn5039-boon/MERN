import React from "react";
import { Skeleton, Card } from "antd";

const LoadingCard = ({ count }) => {
  const LoopCard = () => {
    let card = [];
    for (let i = 0; i < count; i++) {}
  };
  return <div>LoadingCard</div>;
};

export default LoadingCard;
