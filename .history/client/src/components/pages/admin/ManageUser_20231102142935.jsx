import React, { useState, useEffect } from "react";

import { Button, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { list } from "../../../functions/user";

export default function ManageUser() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user);

  useEffect(() => {
    //Code
    loadData(user.user.token);
  }, []);

  const loadData = async (authtoken) => {
    await list(authtoken)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Detail</TableCell>
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
                    <TableCell
                      style={{ cursor: "pointer", color: "red" }}
                    ></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
