import React, { useState, useEffect } from "react";
import { remove, create, geTableCellata } from "../functions/product";
import { Box, Button, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

const FormProduct = () => {
  const [data, seTableCellata] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // Pull the data from backend  show on frontend  below
  const loadData = async () => {
    geTableCellata()
      .then((res) => seTableCellata(res.data))
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
    e.prevenTableCellefault();

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
          />
        </div>
        <Button variant="contained">Submit</Button>
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
        <tbody></tbody>
      </table>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child TableCell, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
            {data
              ? data.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child TableCell, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.detail}</TableCell>
                    <TableCell>{item.file}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleRemove(item._id)}
                    >
                      Delete
                    </TableCell>
                    <TableCell>
                      <Link to={"/edit/" + item._id}>Edit</Link>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FormProduct;
