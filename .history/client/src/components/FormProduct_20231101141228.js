import React, { useState, useEffect } from "react";
import { remove, create, getdata } from "../functions/product";
import { Box, TextField } from "@mui/material";

import { Link } from "react-router-dom";

const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // Pull the data from backend  show on frontend  below
  const loadData = async () => {
    getdata()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setForm({
        // ... copy function inside of useState in form if [] it's mean nothing
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Submit type and collect to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formWithImageData = new FormData();
    for (const key in form) {
      formWithImageData.append(key, form[key]);
    }

    create(formWithImageData)
      .then((res) => {
        console.log(res.data);

        // use data in submit show to frontend
        loadData();
      })
      .catch((err) => console.log(err));
  };
  const handleRemove = async (id) => {
    remove(id)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => console.log(err));
  };

  // Webpage
  return (
    <div>
      FormProduct
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <TextField
            id="outlined-basic"
            label="name"
            name="name"
            onChange={(e) => handleChange(e)}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="detail"
            name="detail"
            onChange={(e) => handleChange(e)}
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            type="file"
            id="outlined-basic"
            label="file"
            name="file"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            focused
          />
        </div>

        <div>
          <TextField
            type="number"
            id="outlined-basic"
            label="price"
            name="price"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            focused
          />
        </div>

        <button>Submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Detail</th>
            <th scope="col">file</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.file}</td>
                  <td>{item.price}</td>
                  <td
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleRemove(item._id)}
                  >
                    Delete
                  </td>
                  <td>
                    <Link to={"/edit/" + item._id}>Edit</Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
