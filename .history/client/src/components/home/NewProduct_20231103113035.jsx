import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";
import { Button } from "antd";
import ProductCard from "../Card/ProductCard";

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
  return (
    <div className="container">
      <div className="row">
        {product.map((item) => (
          <div className="col-mt-4">
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
}
