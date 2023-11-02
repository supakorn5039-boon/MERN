import React, { useState, useEffect } from "react";
import axios from "axios";

const FormProduct = () => {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("http://localhost:3000/api/product")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <div>FormProduct</div>;
};

export default FormProduct;
