import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";

export default function NewProduct() {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await listby(5, "created", "asc")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div>New Product</div>;
}
