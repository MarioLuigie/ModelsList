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
      return [...modelsList, action.payload];
    case READ_MODELS:
      return action.payload;
    case UPDATE_MODEL:
      return modelsList.map(model => (
        model._id === action.payload._id
          ? {...model, ...action.payload}
          : model
      ));
    case DELETE_MODEL:
      return modelsList.filter(model => model._id !== action.payload);
    case DELETE_ALL:
      return [];
    default:
      return modelsList;
  }
}