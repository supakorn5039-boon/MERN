import axios from "axios";

export const register = async (data) =>
  await axios.post(process.env.REACT_APP_API + "/register", data);
