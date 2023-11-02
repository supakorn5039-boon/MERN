import React, { useState, useEffect } from "react";
import { remove, create, getdata } from "../functions/product";

import { Button, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

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
          />
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>file</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.detail}</TableCell>
                    <TableCell>{item.file}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell style={{ cursor: "pointer", color: "red" }}>
                      <DeleteForeverIcon
                        onClick={() => handleRemove(item._id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Link to={"/edit/" + item._id}>
                        <EditIcon />
                      </Link>
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
