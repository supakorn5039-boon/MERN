import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "../functions/product";

const FormEditProducts = () => {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {}, []);

  const loadData = async () => {};

  return <div>FormEditProducts</div>;
};

export default FormEditProducts;
