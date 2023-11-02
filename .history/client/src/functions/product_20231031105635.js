import axios from "axios";

export const handleRemove = async (id) => {
  await axios.delete(process.env._REACT_APP_API + "/product" + id);
};
