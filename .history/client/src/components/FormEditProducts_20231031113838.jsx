import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FormEditProducts = () => {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {});

  return <div>FormEditProducts</div>;
};

export default FormEditProducts;
