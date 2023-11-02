import React, { useState, useEffect } from "react";
import axios from "axios";

const FormProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // Pull the data from backend to show on frontend on below
  const loadData = async () => {
    await axios
      .get("http://localhost:3001/api/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div>
      FormProduct
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
