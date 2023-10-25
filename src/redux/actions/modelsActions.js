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

//Dispatch data from server to reducer (reading datas)
export const readModels = () => async (dispatch) => {
  try {
    const { data } = await services.readModels();

    dispatch({type: READ_MODELS, payload: data});

  } catch (error) {
    console.log("Fail with reading datas", error);
  }
}

