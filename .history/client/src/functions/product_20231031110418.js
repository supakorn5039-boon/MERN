import axios from "axios";

export const remove = async (id) =>
  await axios.delete(process.env._REACT_APP_API + "/product" + id);
