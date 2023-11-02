import React, { useState, useEffect } from "react";
import axios from "axios";

const FormProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("http://localhost:3001/api/product")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  console.log(data);

  return <div>FormProduct</div>;
};

export default FormProduct;
