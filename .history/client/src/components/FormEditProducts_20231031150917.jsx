import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read, updated } from "../functions/product";

const FormEditProducts = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
    });
  };
  console.log(data);

  const handleChange = (e) => {
    setData({
      // ... copy function inside of useState in form if [] it's mean nothing
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //Submit type and collect to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    updated(params.id, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FormEditProducts
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="name"
          value={data.name}
        ></input>
        <br />
        <input
          type="text"
          name="detail"
          onChange={(e) => handleChange(e)}
          placeholder="detail"
          value={data.detail}
        ></input>
        <br />
        <input
          type="file"
          name="file"
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
        <input
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="price"
          value={data.price}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEditProducts;
