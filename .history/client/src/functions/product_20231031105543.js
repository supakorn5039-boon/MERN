import axios from "axios";

const handleRemove = async (id) => {
  await axios
    .delete(process.env._REACT_APP_API + "/product" + id)
    .then((res) => {
      console.log(res), loadData();
    })
    .catch((err) => console.log(err));
};
