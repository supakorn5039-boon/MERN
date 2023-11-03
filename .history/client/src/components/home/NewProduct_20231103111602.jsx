import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";

export default function NewProduct() {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [product, setProduct] = useState([]);
    await listby(5, "createdAt", "desc")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div>New Product</div>;
}
