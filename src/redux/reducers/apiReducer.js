import types from "../../constants/actions";

const initState = {
  isLoading: true,
  error: null
}

const loadingReducer = (state = initState, action) => {

  switch (action.type) {
    case types.LOADING:
      return {...state, isLoading: action.payload};
    case types.ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}

export default loadingReducer;