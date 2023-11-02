import axios from "axios";

export const Remove = async (id) => {
  await axios.delete(process.env._REACT_APP_API + "/product" + id);
};
