import { combineReducers } from "redux";
import { modelsReducer } from "./modelsReducer";

const rootReducer = combineReducers({
  modelsList: modelsReducer
});

export default rootReducer;