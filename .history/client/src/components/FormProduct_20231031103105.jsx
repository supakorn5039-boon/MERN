import React, { useState, useEffect } from "react";
import axios from "axios";

const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // Pull the data from backend  show on frontend  below
  const loadData = async () => {
    await axios
      .get("http://localhost:3001/api/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      // ... copy function inside of useState in form if [] it's mean nothing
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await axios.post("");
  };

  // Webpage
  return (
    <div>
      FormProduct
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Detail</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
