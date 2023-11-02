import React, { useState, useEffect } from "react";

import { Button, MenuItem, Select, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { list } from "../../../functions/user";

import { ChangeRole } from "../../../functions/user";

export default function ManageUser() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  console.log(data);

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

  const role = ["admin", "user"];

  const handleChangeRole = (id, e) => {
    console.log(id, e.target.value);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>UpdateAt</TableCell>
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
                    <TableCell>
                      <Select
                        onChange={(e) => handleChangeRole(item._id, e)}
                        defaultValue={item.role}
                        style={{ width: "100px" }}
                      >
                        {role.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>{item.updatedAt}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
