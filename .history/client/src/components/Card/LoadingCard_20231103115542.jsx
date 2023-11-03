import React from "react";
import { Skeleton, Card } from "antd";

const LoadingCard = ({ count }) => {
  const LoopCard = () => {
    let cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(
        <Card>
          <Skeleton active />
        </Card>
      );
    }
  };
  return <>LoadingCard</>;
};

export default LoadingCard;
