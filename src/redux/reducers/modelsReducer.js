// import { actionTypes as types } from "../../constants/actions";
import types from "../../constants/actions";

const initModelsList = [];

const modelsReducer = (modelsList = initModelsList, action) => {
  switch (action.type) {
    case types.CREATE_MODEL:
      return [...modelsList, action.payload];
    case types.READ_MODELS:
      return action.payload;
    case types.UPDATE_MODEL:
      return modelsList.map(model => (
        model._id === action.payload._id
          ? {...model, ...action.payload}
          : model
      ));
    case types.DELETE_MODEL:
      return modelsList.filter(model => model._id !== action.payload);
    case types.DELETE_ALL:
      return [];
    default:
      return modelsList;
  }
}

export default modelsReducer;