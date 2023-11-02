import axios from "axios";

export const create = async (data) =>
  await axios.post(process.env.REACT_APP_API + "/register", data);
