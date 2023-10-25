import axios from "axios";

const url = "https://places-arw.vercel.app/api/people";

const mdlAxios = axios.create({baseURL: url});

//Post data on server and return data
export const createModel = (newModel) => {
  const data = mdlAxios.post("/", newModel);
  return data;
}

//Get data from server and return data
export const readModels = () => {
  const data = mdlAxios.get("/");
  return data;
}