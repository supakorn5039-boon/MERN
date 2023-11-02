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

  return (
    <div>
      FormProduct
      <table class="table">
        <thead>
          {data
            ? data.map((item) => (
                <tr>
                  <th scope="col">{item.name}</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              ))
            : null}
        </thead>
        <tbody>
          {data
            ? data.map((item) => (
                <tr>
                  <th scope="row">{item.name}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
