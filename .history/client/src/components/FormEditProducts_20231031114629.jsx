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
    // create(form)
    //   .then((res) => {
    //     console.log(res.data);

    //     // use data in submit show to frontend
    //     loadData();
    //   })
    //   .catch((err) => console.log(err));
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
        ></input>
        <br />
        <input
          type="text"
          name="detail"
          onChange={(e) => handleChange(e)}
          placeholder="detail"
        ></input>
        <br />
        <input
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="price"
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEditProducts;
