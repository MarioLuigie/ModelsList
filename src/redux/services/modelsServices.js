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

//Patch data on server and return updated data
export const updateModel = (form, id) => {
  const data = mdlAxios.patch(`/${id}`, form);
  return data;
}

//Delete selected item
export const deleteModel = (id) => {
  const data = mdlAxios.delete(`/${id}`);
  return data;
}

//Delete all datas from server
export const deleteAll = () => {
  const data = mdlAxios.delete("/");
  return data;
}

