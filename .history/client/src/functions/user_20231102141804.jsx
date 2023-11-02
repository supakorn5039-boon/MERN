import axios from "axios";

export const list = async (authtoken) => {
  return await axios.get(
    process.env.REACT_APP_API + "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
