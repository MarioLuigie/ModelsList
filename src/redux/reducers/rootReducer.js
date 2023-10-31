import { combineReducers } from "redux";
import modelsReducer from "./modelsReducer";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
  modelsList: modelsReducer,
  api: apiReducer
});

export default rootReducer;