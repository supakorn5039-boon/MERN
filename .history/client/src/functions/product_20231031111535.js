import axios from "axios";

export const remove = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/product/" + id);

export const create = async (data) =>
  await axios.post(process.env.REACT_APP_API + "/product/", data);
