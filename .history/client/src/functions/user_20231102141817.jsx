import axios from "axios";

export const list = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
