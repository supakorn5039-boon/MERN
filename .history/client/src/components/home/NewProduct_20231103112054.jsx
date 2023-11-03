import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";
import { Button } from "antd";

export default function NewProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await listby(5, "createdAt", "desc")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div className="container">New Product</div>;
}
