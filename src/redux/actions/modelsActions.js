/* eslint-disable no-unused-vars */
import * as services from "../services/modelsServices";
import types from "../../constants/actions";

//Create new object in List
export const createModel = (newModel) => async (dispatch) => {
  try {
    const { data } = await services.createModel(newModel);

    dispatch({type: types.CREATE_MODEL, payload: data});

  } catch (error) {
    console.error("Fail with creating data", error);
  }
}

//Create new List
export const readModels = () => async (dispatch) => {
  try {
    const { data } = await services.readModels();

    dispatch({type: types.READ_MODELS, payload: data});

  } catch (error) {
    console.error("Fail with reading datas", error);
  }
}

//Update selected object in existing List
export const updateModel = (form, id) => async (dispatch) => {
  try {
    const { data } = await services.updateModel(form, id);

    dispatch({type: types.UPDATE_MODEL, payload: data});

  } catch (error) {
    console.error("Fail with updating data", error);
  }
}

//Delete selected object in existing List
export const deleteModel = (id) => async (dispatch) => {
  try {
    const { data } = await services.deleteModel(id);

    dispatch({type: types.DELETE_MODEL, payload: id});
    
  } catch (error) {
    console.error("Fail with deleting data", error);
  }
}

//Delete all objects from existing List
export const deleteAll = () => async (dispatch) => {
  try {
    await services.deleteAll();

    dispatch({type: types.DELETE_ALL});
    
  } catch (error) {
    console.error("Fail with deleting all datas", error);
  }
}