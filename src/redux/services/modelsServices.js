import axios from "axios";

//Initialization endpoint
const url = "https://places-arw.vercel.app/api/people";
//Create base url for all services
const modelAxios = axios.create({baseURL: url});

//Service send object to server and return axios object with data(object) in prop data of returned data
export const createModel = (newModel) => {
  const data = modelAxios.post("/", newModel);
  return data;
}

//Services return data from server
export const readModels = () => {
  const data = modelAxios.get("/");
  return data;
}

//Service send edited object and id to server and return this edited object
export const updateModel = (form, id) => {
  const data = modelAxios.patch(`/${id}`, form);
  return data;
}

//Service send id object to delete and return message
export const deleteModel = (id) => {
  const data = modelAxios.delete(`/${id}`);
  return data;
}

//Service return message
export const deleteAll = () => {
  const data = modelAxios.delete("/");
  return data;
}

