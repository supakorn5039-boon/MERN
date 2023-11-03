import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";
import { Button } from "antd";
import ProductCard from "../Card/ProductCard";

export default function NewProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await listby(5, "createdAt", "desc")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">

{/* Loading (?) =  True (what we do), (:) = False what next  */}
    { loading ? ... : ...}

        {product.map((item) => (
          <div className="col-md-4">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
