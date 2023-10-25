import axios from "axios";

const url = "https://places-arw.vercel.app/api/people";

const mdlAxios = axios.create({baseURL: url});

//Get data from server and return data
export const readModels = () => {
  const data = mdlAxios.get("/");
  return data;
}