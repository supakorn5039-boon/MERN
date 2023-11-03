import React, { useEffect, useState } from "react";
import { listby } from "../../functions/product";

export default function NewProduct() {
  useEffect(() => {}, []);

  const loadData = async () => {
    await listby(5, "price", "desc");
  };
  return <div>New Product</div>;
}
