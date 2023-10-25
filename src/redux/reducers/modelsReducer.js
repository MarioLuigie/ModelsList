import { actionsType } from "../actions/modelsActions";

const { 
  CREATE_MODEL, 
  READ_MODELS, 
  UPDATE_MODEL, 
  DELETE_MODEL, 
  DELETE_ALL
} = actionsType;

const initModelsList = [];

export const modelsReducer = (modelsList = initModelsList, action) => {

  switch (action.type) {
    case CREATE_MODEL:
      return modelsList;
    case READ_MODELS:
      return action.payload;
    case UPDATE_MODEL:
      return modelsList;
    case DELETE_MODEL:
      return modelsList;
    case DELETE_ALL:
      return modelsList;
    default:
      return modelsList;
  }
}