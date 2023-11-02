import axios from "axios";

export const remove = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/product/" + id);
