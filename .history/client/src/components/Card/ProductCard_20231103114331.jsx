import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const ProductCard = ({ data }) => {
  console.log(data);
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          style={{ width: "100%", height: "200" }}
          alt="example"
          src={"http://localhost:3001/uploads/" + data.file}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={data.name}
        description={data.detail + "  Price " + data.price}
      />
    </Card>
  );
};

export default ProductCard;
