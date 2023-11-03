import axios from "axios";
import { appCheck, getToken } from "../firebase";

const GenerateToken = async () => {
  try {
    const token = await getToken(appCheck);
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const remove = async (id) =>
  await axios.delete(process.env.REACT_APP_API + "/product/" + id);

export const create = async (data) =>
  await axios.post(process.env.REACT_APP_API + "/product", data);

export const listby = async (data) => {
  return axios.post(process.env.REACT_APP_API + "/productby", data);
};

export const getdata = async () => {
  const boon = await GenerateToken();
  console.log("boon token", boon);
  return await axios.get(process.env.REACT_APP_API + "/product", {
    headers: {
      "X-Firebase-AppCheck": boon.token,
    },
  });
};

export const read = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/product/" + id);
};

export const updated = async (id, data) => {
  return await axios.put(process.env.REACT_APP_API + "/product/" + id, data);
};
