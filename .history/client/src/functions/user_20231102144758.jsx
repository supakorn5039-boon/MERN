import axios from "axios";

export const list = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/user", {
    headers: {
      authtoken,
    },
  });
};

export const ChangeRole = async (authtoken, data) => {
  return await axios.post(process.env.REACT_APP_API + "/change-role", {
    headers: {
      authtoken,
      data,
    },
  });
};
