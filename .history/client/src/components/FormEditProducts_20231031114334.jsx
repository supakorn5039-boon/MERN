import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "../functions/product";

const FormEditProducts = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
    });
  };
  console.log(data);

  return <div>FormEditProducts</div>;
};

export default FormEditProducts;
