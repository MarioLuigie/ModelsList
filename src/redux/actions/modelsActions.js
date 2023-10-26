import * as services from "../services/modelsServices";

export const actionsType = {
  CREATE_MODEL: "CREATE_MODEL",
  READ_MODELS: "READ_MODELS",
  UPDATE_MODEL: "UPDATE_MODEL",
  DELETE_MODEL: "DELETE_MODEL",
  DELETE_ALL: "DELETE_ALL"
}

const {
  CREATE_MODEL,
  READ_MODELS,
  UPDATE_MODEL,
  DELETE_MODEL,
  DELETE_ALL
} = actionsType;

//Dispatch data from server to reducer (create data)
export const createModel = (newModel) => async (dispatch) => {
  try {
    const { data } = await services.createModel(newModel);

    dispatch({type: CREATE_MODEL, payload: data});

  } catch (error) {
    console.log("Fail with creating data", error);
  }
}

//Dispatch data from server to reducer (reading datas)
export const readModels = () => async (dispatch) => {
  try {
    const { data } = await services.readModels();

    dispatch({type: READ_MODELS, payload: data});

  } catch (error) {
    console.log("Fail with reading datas", error);
  }
}

//Dispatch updated data to reducer from server
export const updateModel = (form, id) => async (dispatch) => {
  try {
    const { data } = await services.updateModel(form, id);

    dispatch({type: UPDATE_MODEL, payload: data});
    console.log(data);

  } catch (error) {
    console.log("Fail with updating data", error);
  }
}

export const deleteModel = (id) => async (dispatch) => {
  try {
    await services.deleteModel(id);

    dispatch({type: DELETE_MODEL, payload: id});
    
  } catch (error) {
    console.log("Fail with deleting data", error);
  }
}

//Dispatch all deleted datas to reducer from server
export const deleteAll = () => async (dispatch) => {
  try {
    await services.deleteAll();

    dispatch({type: DELETE_ALL});
    
  } catch (error) {
    console.log("Fail with deleting all datas", error);
  }
}